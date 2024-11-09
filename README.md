# Markdown Path Converter

A Visual Studio Code extension that helps you convert image paths in Markdown files between relative and absolute paths.

[English](#english) | [中文](#中文)

## English

### Features

- Convert relative image paths to absolute paths in Markdown files
- Convert absolute image paths to relative paths in Markdown files
- Multi-language support (English, Simplified Chinese, Japanese)
- Context menu integration
- Path validation and error handling

### Installation

You can install this extension in several ways:

1. From VS Code Marketplace:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Markdown Path Converter"
   - Click Install

2. From VSIX file:
   - Download the .vsix file from the releases
   - Open VS Code
   - Press Ctrl+Shift+P
   - Type "Install from VSIX" and select it
   - Choose the downloaded .vsix file

### Usage

1. Open a Markdown file in VS Code
2. Select the text containing image references
3. Right-click to open the context menu
4. Choose either:
   - "Convert to Absolute Path" to convert relative paths to absolute paths
   - "Convert to Relative Path" to convert absolute paths to relative paths

Example:

Before (relative path):
```markdown
![image](images/example.png)
```

After (absolute path):
```markdown
![image](/Users/username/project/images/example.png)
```

### Requirements

- Visual Studio Code 1.74.0 or higher
- A workspace folder must be opened

### Extension Settings

This extension doesn't require any additional settings.

### Known Issues

- File existence checking is only performed for absolute path conversion
- Network images (http/https URLs) are not processed

### Release Notes

#### 1.0.0
- Initial release
- Basic path conversion functionality
- Multi-language support
- Context menu integration

---

## 中文

### 功能特性

- 将 Markdown 文件中的相对图片路径转换为绝对路径
- 将 Markdown 文件中的绝对图片路径转换为相对路径
- 多语言支持（英语、简体中文、日语）
- 右键菜单集成
- 路径验证和错误处理

### 安装方法

您可以通过以下方式安装此扩展：

1. 通过 VS Code 应用市场安装：
   - 打开 VS Code
   - 转到扩展页面（Ctrl+Shift+X）
   - 搜索 "Markdown Path Converter"
   - 点击安装

2. 通过 VSIX 文件安装：
   - 从发布页面下载 .vsix 文件
   - 打开 VS Code
   - 按下 Ctrl+Shift+P
   - 输入 "Install from VSIX" 并选择
   - 选择下载的 .vsix 文件

### 使用方法

1. 在 VS Code 中打开 Markdown 文件
2. 选中包含图片引用的文本
3. 右键点击打开上下文菜单
4. 选择：
   - "转换为绝对路径" 将相对路径转换为绝对路径
   - "转换为相对路径" 将绝对路径转换为相对路径

示例：

转换前（相对路径）：
```markdown
![图片](images/example.png)
```

转换后（绝对路径）：
```markdown
![图片](/Users/username/project/images/example.png)
```

### 系统要求

- Visual Studio Code 1.74.0 或更高版本
- 必须打开工作区文件夹

### 扩展设置

此扩展不需要任何额外设置。

### 已知问题

- 仅在转换为绝对路径时进行文件存在性检查
- 不处理网络图片（http/https URL）

### 更新日志

#### 1.0.0
- 初始发布
- 基本路径转换功能
- 多语言支持
- 右键菜单集成

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This extension is licensed under the [MIT License](LICENSE).

## More Information

* [Source Code on GitHub](https://github.com/seeu100/markdown-path-converter)
* [Extension Page on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=seeu100.markdown-path-converter)
* [Report an Issue](https://github.com/seeu100/markdown-path-converter/issues)