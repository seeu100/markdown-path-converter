import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    // 注册转换为绝对路径的命令
    let convertToAbsolute = vscode.commands.registerCommand('markdown-path-converter.convertToAbsolute', async () => {
        await convertPaths('absolute');
    });

    // 注册转换为相对路径的命令
    let convertToRelative = vscode.commands.registerCommand('markdown-path-converter.convertToRelative', async () => {
        await convertPaths('relative');
    });

    context.subscriptions.push(convertToAbsolute, convertToRelative);
}

async function convertPaths(mode: 'absolute' | 'relative') {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }

    const selection = editor.selection;
    const text = editor.document.getText(selection);
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(editor.document.uri);

    if (!workspaceFolder) {
        vscode.window.showErrorMessage(getLocalizedMessage('errorNoWorkspace'));
        return;
    }

    const documentDir = path.dirname(editor.document.uri.fsPath);
    
    // 匹配Markdown图片语法
    const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    let newText = text;
    let match;

    while ((match = imageRegex.exec(text)) !== null) {
        const [fullMatch, altText, imagePath] = match;
        let newPath: string;
        
        if (mode === 'absolute') {
            // 转换为绝对路径
            newPath = path.isAbsolute(imagePath) 
                ? imagePath 
                : path.resolve(documentDir, imagePath);
        } else {
            // 转换为相对路径
            newPath = path.isAbsolute(imagePath)
                ? path.relative(documentDir, imagePath)
                : imagePath;
        }
        
        // 规范化路径分隔符
        newPath = newPath.split(path.sep).join('/');
        
        // 如果是绝对路径模式，检查文件是否存在
        if (mode === 'absolute' && !fs.existsSync(newPath)) {
            vscode.window.showWarningMessage(getLocalizedMessage('warningFileNotFound', newPath));
            continue;
        }

        newText = newText.replace(imagePath, newPath);
    }

    // 替换选中的文本
    await editor.edit(editBuilder => {
        editBuilder.replace(selection, newText);
    });
}

// 获取本地化消息
function getLocalizedMessage(key: string, ...args: string[]): string {
    // 这里可以根据 VSCode 的语言设置返回相应的本地化消息
    const messages: { [key: string]: { [key: string]: string } } = {
        'en': {
            'errorNoWorkspace': 'Please open a workspace folder first.',
            'warningFileNotFound': 'File not found: ${0}',
        },
        'zh-cn': {
            'errorNoWorkspace': '请先打开工作区文件夹。',
            'warningFileNotFound': '未找到文件：${0}',
        },
        'ja': {
            'errorNoWorkspace': 'ワークスペースフォルダを開いてください。',
            'warningFileNotFound': 'ファイルが見つかりません：${0}',
        }
    };

    // 获取 VSCode 的语言设置
    const locale = vscode.env.language || 'en';
    const localMessages = messages[locale] || messages['en'];
    let message = localMessages[key] || messages['en'][key];

    // 替换参数
    args.forEach((arg, index) => {
        message = message.replace(`\${${index}}`, arg);
    });

    return message;
}

export function deactivate() {}