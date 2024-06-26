import { _howToSchemas } from "./how-to";

export const howToSchema: _howToSchemas = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "¿Cómo convertir un PDF a Markdown?",
    description: "Tres pasos fáciles para convertir un archivo PDF a Markdown.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abre el convertidor de PDF a Markdown en PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Arrastra y suelta el archivo PDF o haz clic en el botón 'Seleccionar archivos PDF' para subir tu PDF."
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Haz clic en el botón 'Descargar archivo Markdown convertido' para guardar el archivo convertido en tu dispositivo."
        }
    ]
};
