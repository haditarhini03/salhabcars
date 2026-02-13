(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();let l={},c="en";const w="/salhabcars/";async function m(e){const n=await fetch(`${w}i18n/${e}.json`);if(!n.ok)throw new Error(`Translation file ${e}.json not found`);return await n.json()}async function L(){try{l.en=await m("en"),l.ar=await m("ar"),h(c)}catch(e){console.error("Failed to load translations:",e)}}function E(e){c=e,document.documentElement.lang=e,h(e)}function h(e){document.querySelectorAll("[data-i18n]").forEach(n=>{const t=n.getAttribute("data-i18n");n.textContent=l[e][t]||t})}function r(e){return l[c]&&l[c][e]||e}window.setLanguage=E;let d="en";const f=document.getElementById("car-list"),s=document.getElementById("car-modal"),b=document.getElementById("modal-body"),$=s?s.querySelector(".close"):null,v="/salhabcars/";async function B(){if(!f)return;const n=await(await fetch(`${v}data/cars.json`)).json();f.innerHTML=n.filter(t=>t.status==="available").map(t=>`
            <div class="car-card" data-id="${t.id}">
                <img src="${t.images[0]}" alt="${t.title[d]}">
                <h3>${t.title[d]}</h3>
                <p>${r("price")}: $${t.price}</p>
                <p>${r("year")}: ${t.year}</p>
            </div>
        `).join(""),document.querySelectorAll(".car-card").forEach(t=>{t.addEventListener("click",()=>I(n.find(i=>i.id==t.dataset.id)))})}function I(e){const n=e.images.map(i=>`<img src="${i}" class="modal-img">`).join(""),t=e.auctionUrl?`<p><a href="${e.auctionUrl}" target="_blank">${r("view_auction")}</a></p>`:"";b.innerHTML=`
        <h2>${e.title[d]}</h2>
        <div class="modal-images">${n}</div>
        <p>${e.description[d]}</p>
        <ul>
            <li>${r("brand")}: ${e.brand}</li>
            <li>${r("model")}: ${e.model}</li>
            <li>${r("year")}: ${e.year}</li>
            <li>${r("mileage")}: ${e.mileage}</li>
            <li>${r("transmission")}: ${e.transmission}</li>
            <li>${r("fuel")}: ${e.fuel}</li>
        </ul>
        ${t}
    `,s.style.display="block"}$&&($.onclick=()=>s.style.display="none",window.onclick=e=>{e.target==s&&(s.style.display="none")});const p="/salhabcars/";async function y(e,n){const t=document.getElementById(e);if(!t){console.warn(`Element with id "${e}" not found`);return}try{console.log(`Loading ${n}...`);const i=await fetch(n);if(!i.ok)throw new Error(`Failed to load ${n}: ${i.status}`);const o=await i.text();t.innerHTML=o,console.log(`${n} loaded successfully`)}catch(i){console.error(`Error loading ${n}:`,i)}}async function g(){console.log("Initializing...");try{await y("header-placeholder",`${p}components/header.html`),await y("footer-placeholder",`${p}components/footer.html`),await L(),await B(),console.log("Initialization complete")}catch(e){console.error("Initialization error:",e)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();export{c,E as s};
