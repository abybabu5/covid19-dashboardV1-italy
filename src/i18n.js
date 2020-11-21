import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";

import it from "./locale/it_translation.json"
// import en from "./locales/en/translation"

i18n
    // load translation using xhr -> see /src/locales
    .use(XHR)
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next
    .use(initReactI18next)
    // init i18next
    .init({
        resources: {
            it: {
                translations: it
            }
        },
        fallbackLng: "it",
        load: "languageOnly",
        debug: false,

        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ","
        },

        react: {
            wait: true,
            useSuspense: false
        }
    });

export default i18n;