import { _howToSchemas } from "./how-to";

export const howToSchema: _howToSchemas = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF को Markdown में कैसे बदलें?",
    description: "PDF फ़ाइल को Markdown में बदलने के लिए 3 आसान चरण।",
    step: [
        {
            "@type": "HowToStep",
            name: "चरण 1",
            text: "PDFEquips पर PDF को Markdown में बदलने वाला कनवर्टर खोलें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 2",
            text: "PDF फ़ाइल को खींचकर छोड़ें या अपना PDF अपलोड करने के लिए 'PDF फ़ाइलें चुनें' बटन पर क्लिक करें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 3",
            text: "परिवर्तित Markdown फ़ाइल को अपने डिवाइस पर सहेजने के लिए 'डाउनलोड परिवर्तित Markdown फ़ाइल' बटन पर क्लिक करें।"
        }
    ]
}