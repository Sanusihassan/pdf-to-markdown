import { _howToSchemas } from "./how-to";

export const howToSchema: _howToSchemas = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment convertir un PDF en Markdown ?",
    description: "Trois étapes faciles pour convertir un fichier PDF en Markdown.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez le convertisseur PDF en Markdown sur PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Faites glisser et déposez le fichier PDF ou cliquez sur le bouton 'Sélectionner les fichiers PDF' pour télécharger votre PDF."
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Cliquez sur le bouton 'Télécharger le fichier Markdown converti' pour enregistrer le fichier converti sur votre appareil."
        }
    ]
};
