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
    title: "PDF vers Markdown",
    seoTitle:
      "Convertir PDF en Markdown en ligne - Convertisseur PDF vers Markdown | PDFEquips",
    description: "Convertir des fichiers PDF au format Markdown",
    color: "#FF4136",
    type: ".pdf",
    to: "/pdf-to-markdown",
    features: [
      {
        title: "Gratuit et Facile à Utiliser",
        description: "PDFEquips offre un service de conversion de PDF en Markdown gratuit et convivial sans nécessité d'inscription ni de fournir des informations personnelles."
      },
      {
        title: "Conversion Précise",
        description: "Notre outil assure une conversion précise des documents PDF au format Markdown, en préservant autant que possible la mise en forme et le contenu originaux."
      },
      {
        title: "Traitement Sécurisé",
        description: "Tous les fichiers téléchargés sur nos serveurs pour la conversion sont cryptés à l'aide de TLS. Vos fichiers sont automatiquement supprimés de nos serveurs après l'achèvement du processus de conversion. Pour plus de détails, veuillez consulter notre politique de confidentialité."
      }
    ]

  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "pdf-to-markdown": [
      "Conversion de fichiers PDF en Markdown réussie !",
      "Conversion de fichier PDF en Markdown réussie !",
    ],
  },
  btnText: {
    "pdf-to-markdown": [
      "Télécharger les fichiers Markdown convertis",
      "Télécharger le fichier Markdown converti",
    ],
  },
  backto: {
    "pdf-to-markdown": "Retour à PDF vers Markdown",
  },
};

export const edit_page = {
  edit_page_titles: { pdf_to_markdown: "Options de PDF vers Markdown" },
  loader_text: "veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: { pdf_to_markdown: "Convertir en Markdown" },
  pages: "pages",
  page: "page",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "conditions",
  conditions: "conditions d'utilisation",
  privacy_policy: "politique de confidentialité",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
};
