import { t } from './translation.js'; // your translation helper

let currentLang = 'en'; // default, can be updated by translation.js

const carListContainer = document.getElementById('car-list');
const modal = document.getElementById('car-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = modal ? modal.querySelector('.close') : null;

async function loadCars() {
    if (!carListContainer) return; // Skip if car list doesn't exist on this page
    
    const res = await fetch('data/cars.json');
    const cars = await res.json();

    carListContainer.innerHTML = cars
        .filter(car => car.status === 'available')
        .map(car => `
            <div class="car-card" data-id="${car.id}">
                <img src="${car.images[0]}" alt="${car.title[currentLang]}">
                <h3>${car.title[currentLang]}</h3>
                <p>${t('price')}: $${car.price}</p>
                <p>${t('year')}: ${car.year}</p>
            </div>
        `).join('');

    // Add click events
    document.querySelectorAll('.car-card').forEach(card => {
        card.addEventListener('click', () => openModal(cars.find(c => c.id == card.dataset.id)));
    });
}

function openModal(car) {
    const imagesHtml = car.images.map(img => `<img src="${img}" class="modal-img">`).join('');
    const auctionHtml = car.auctionUrl ? `<p><a href="${car.auctionUrl}" target="_blank">${t('view_auction')}</a></p>` : '';
    modalBody.innerHTML = `
        <h2>${car.title[currentLang]}</h2>
        <div class="modal-images">${imagesHtml}</div>
        <p>${car.description[currentLang]}</p>
        <ul>
            <li>${t('brand')}: ${car.brand}</li>
            <li>${t('model')}: ${car.model}</li>
            <li>${t('year')}: ${car.year}</li>
            <li>${t('mileage')}: ${car.mileage}</li>
            <li>${t('transmission')}: ${car.transmission}</li>
            <li>${t('fuel')}: ${car.fuel}</li>
        </ul>
        ${auctionHtml}
    `;
    modal.style.display = 'block';
}

// Close modal
if (modalClose) {
    modalClose.onclick = () => modal.style.display = 'none';
    window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; };
}

export { loadCars };
