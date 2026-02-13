import { currentLang, setLanguage } from './translation.js';

window.setLanguage = setLanguage; // for inline buttons

const modal = document.getElementById('service-modal');
const modalBody = document.getElementById('service-modal-body');
const modalClose = modal ? modal.querySelector('.close') : null;

const servicesData = {
    trade: {
        title: { en: "Trade", ar: "تجارة" },
        image: "/assets/images/ui/image1.png",
        description: {
            en: "We trade Lebanese and imported cars.",
            ar: "نقوم بتجارة السيارات اللبنانية والمستوردة."
        },
        contact: { en: "Contact us for details.", ar: "تواصل معنا لمزيد من التفاصيل." }
    },
    repair: {
        title: { en: "Repair", ar: "تصليح" },
        image: "/assets/images/ui/image.png",
        description: {
            en: "Garage: حدادة و بويا و فرن رش السيارات",
            ar: "الورشة: حدادة و بويا و فرن رش السيارات"
        },
        contact: { en: "Visit our garage for repair.", ar: "زوروا ورشتنا للصيانة." }
    },
    auction: {
        title: { en: "Auction", ar: "مزاد" },
        image: "/assets/images/ui/auction.png",
        description: {
            en: "Give us the auction link and we will ship it to you.",
            ar: "أعطنا رابط المزاد وسنقوم بشحن السيارة لك."
        },
        contact: { en: "Contact us with the link.", ar: "تواصل معنا مع الرابط." }
    }
};


document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        if (!modal || !modalBody) return;
        const id = card.dataset.id;
        const service = servicesData[id];
        modalBody.innerHTML = `
            <h2>${service.title[currentLang]}</h2>
            <p>${service.description[currentLang]}</p>
            <p>${service.contact[currentLang]}</p>
        `;
        modal.style.display = 'block';
    });
});

// Close modal
if (modal && modalClose) {
    modalClose.onclick = () => modal.style.display = 'none';
    window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; };
}
