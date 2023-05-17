import constate from "constate"
import { useState } from "react";


export const [LanguageProvider, useCurrentLanguage] = constate(function Language() {
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");
    const supportedLanguages = ['en', 'es']

    function handleCurrentLanguage(lang: string) {
        setCurrentLanguage(lang)
    }

    return {
        currentLanguage,
        handleCurrentLanguage,
        supportedLanguages
    }
})