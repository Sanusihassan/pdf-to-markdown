import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  PDF_to_Markdown: {
    title: "PDF转Markdown",
    seoTitle: "在线将 PDF 转换为 Markdown - PDF 转 Markdown 转换器 | PDFEquips",
    description: "将 PDF 文件转换为 Markdown 格式",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-markdown": [
      "PDF文件已转换为Markdown！",
      "PDF文件已转换为Markdown！",
    ],
  },
  btnText: {
    "pdf-to-markdown": ["下载转换后的Markdown文件", "下载转换后的Markdown文件"],
  },
  backto: {
    "pdf-to-markdown": "返回PDF转Markdown",
  },
};

export const edit_page = {
  edit_page_titles: { pdf_to_markdown: "PDF 转 Markdown 选项" },
  loader_text: "请稍候...",
  add_more_button: "添加更多文件",
  action_buttons: { pdf_to_markdown: "转换为 Markdown" },
  pages: "页",
  page: "页",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
};
