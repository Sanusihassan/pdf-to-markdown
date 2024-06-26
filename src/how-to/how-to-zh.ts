import { _howToSchemas } from "./how-to";

export const howToSchema: _howToSchemas = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何将 PDF 转换为 Markdown？",
    description: "三个简单步骤将 PDF 文件转换为 Markdown。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "在 PDFEquips 上打开 PDF 转 Markdown 转换器。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "拖放 PDF 文件或点击“选择 PDF 文件”按钮上传您的 PDF。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "点击“下载转换后的 Markdown 文件”按钮将转换后的文件保存到您的设备。"
        }
    ]
};
