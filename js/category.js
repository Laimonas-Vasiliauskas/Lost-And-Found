const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const ads = [
    { category: "elektronika", title: "Rastas Telefonas", text: "iPhone 12 prie Akropolio." },
    { category: "apranga", title: "Rasta Striukė", text: "Mėlyna žieminė striukė." },
    { category: "raktai", title: "Rasti Raktai", text: "Raktai su pakabuku prie parko." },
    { category: "dokumentai", title: "Rasti Dokumentai", text: "Piniginė su dokumentais prie stoties." },
    { category: "visi", title: "Visi Skelbimai", text: "Visi pateikti skelbimai." }
];

document.getElementById("category-title").textContent =
  type ? type.charAt(0).toUpperCase() + type.slice(1) : "Visi skelbimai";

const filtered = ads.filter(ad => ad.category === type);
const list = document.getElementById("ads-list");

filtered.forEach(ad => {
  list.innerHTML += `
    <div class="ad-item">
      <h3>${ad.title}</h3>
      <p>${ad.text}</p>
    </div>
  `;
});