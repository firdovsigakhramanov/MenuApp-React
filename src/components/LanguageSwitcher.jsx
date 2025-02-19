import { useState, useEffect } from "react";

const languages = [
    { code: "az", label: "Azərbaycan", flag: "https://flagcdn.com/w40/az.png" },
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
];

export default function LanguageSwitcher() {
    const [selectedLang, setSelectedLang] = useState("az");

    useEffect(() => {
        const savedLang = localStorage.getItem("siteLang") || "az";
        setSelectedLang(savedLang);
    }, []);

    const changeLanguage = (lang) => {
        setSelectedLang(lang);
        localStorage.setItem("siteLang", lang);
        window.location.reload(); // Dili dəyişdikdən sonra yenidən yüklə
    };

    return (
        <div className="relative hidden sm:inline-block">
            <select
                value={selectedLang}
                onChange={(e) => changeLanguage(e.target.value)}
                className="px-2 py-2 text-sm cursor-pointer bg-white border border-orange-300 rounded-md shadow-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="cursor-pointer text-orange-950">
                    {lang.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
