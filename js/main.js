import { loadCars } from './cars.js';
import { initTranslations } from './translation.js';

// Load header and footer
export async function loadComponent(id, url) {
    const el = document.getElementById(id);
    if (!el) {
        console.warn(`Element with id "${id}" not found`);
        return;
    }
    try {
        console.log(`Loading ${url}...`);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
        const html = await res.text();
        el.innerHTML = html;
        console.log(`${url} loaded successfully`);
    } catch (err) {
        console.error(`Error loading ${url}:`, err);
    }
}


// Initialize
async function init() {
    console.log('Initializing...');
    try {
        await loadComponent('header-placeholder', 'public/components/header.html');
        await loadComponent('footer-placeholder', 'public/components/footer.html');
        await initTranslations(); 
        await loadCars();
        console.log('Initialization complete');
    } catch (err) {
        console.error('Initialization error:', err);
    }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
