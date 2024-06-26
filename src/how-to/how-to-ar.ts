import { _howToSchemas } from "./how-to";

export const howToSchema: _howToSchemas = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيف تقوم بتحويل ملف PDF إلى Markdown؟",
    description: "ثلاث خطوات سهلة لتحويل ملف PDF إلى Markdown.",
    step: [
        {
            "@type": "HowToStep",
            name: "الخطوة 1",
            text: "افتح محول PDF إلى Markdown على PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 2",
            text: "اسحب وأسقط ملف PDF أو انقر على زر 'اختيار ملفات PDF' لتحميل ملف PDF الخاص بك."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 3",
            text: "انقر على زر 'تنزيل ملف Markdown المحول' لحفظ الملف المحول إلى جهازك."
        }
    ]
};