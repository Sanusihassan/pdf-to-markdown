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
    title: "PDF से मार्कडाउन",
    seoTitle:
      "PDF से Markdown में रूपांतरित करें ऑनलाइन - PDF से Markdown कनवर्टर | PDFEquips",
    description: "PDF फ़ाइलें Markdown प्रारूप में बदलें",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
    features: [
      {
        title: "पूरी तरह से मुफ़्त और उपयोग में आसान",
        description: "PDFEquips एक मुफ़्त और उपयोगकर्ता के अनुकूल PDF से Markdown में परिवर्तन सेवा प्रदान करता है, जिसके लिए पंजीकरण या व्यक्तिगत जानकारी प्रदान करने की आवश्यकता नहीं है।"
      },
      {
        title: "सटीक परिवर्तन",
        description: "हमारा उपकरण PDF दस्तावेज़ों को Markdown प्रारूप में सटीक रूप से बदलने की गारंटी देता है, जो मूल प्रारूप और सामग्री को यथासंभव सुरक्षित रखता है।"
      },
      {
        title: "सुरक्षित प्रसंस्करण",
        description: "हमारे सर्वरों पर अपलोड की गई सभी फाइलें TLS का उपयोग करके एन्क्रिप्ट की जाती हैं। परिवर्तन प्रक्रिया पूरी होने के बाद आपकी फाइलें हमारे सर्वरों से स्वचालित रूप से हटा दी जाती हैं। अधिक जानकारी के लिए कृपया हमारी गोपनीयता नीति देखें।"
      }
    ]

  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-markdown": [
      "PDF फ़ाइलें मार्कडाउन में रूपांतरित की गईं!",
      "PDF फ़ाइल को मार्कडाउन में रूपांतरित किया गया है!",
    ],
  },
  btnText: {
    "pdf-to-markdown": [
      "मार्कडाउन में रूपांतरित की गई PDF फ़ाइलें डाउनलोड करें",
      "मार्कडाउन में रूपांतरित की गई PDF फ़ाइल डाउनलोड करें",
    ],
  },
  backto: {
    "pdf-to-markdown": "PDF से मार्कडाउन को वापस जाएं",
  },
};

export const edit_page = {
  edit_page_titles: { pdf_to_markdown: "पीडीएफ से मार्कडाउन विकल्प" },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "और फ़ाइलें जोड़ें",
  action_buttons: { pdf_to_markdown: "मार्कडाउन में परिवर्तित करें" },
  pages: "पृष्ठ",
  page: "पृष्ठ",
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },
};
