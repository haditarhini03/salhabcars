let translations = {};
let currentLang = 'en'; // default language

// Load a JSON translation file
async function loadTranslations(lang) {
    const res = await fetch(`i18n/${lang}.json`);
    if (!res.ok) throw new Error(`Translation file ${lang}.json not found`);
    const data = await res.json();
    return data;
}


async function initTranslations() {
    try {
        translations['en'] = await loadTranslations('en');
        translations['ar'] = await loadTranslations('ar');
        applyLanguage(currentLang);
    } catch (err) {
        console.error('Failed to load translations:', err);
    }
}


// Switch language dynamically
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang; // LTR/RTL
    applyLanguage(lang);
}

// Apply translations to all elements with data-i18n
function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key] || key;
    });
}

// Helper to get translation in JS code
function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
}

// Export functions for other modules
export { initTranslations, setLanguage, t, currentLang };
window.setLanguage = setLanguage;