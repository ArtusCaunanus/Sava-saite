// ======== Autortiesību gada iestatīšana kājenē ========
document.getElementById("gads").textContent = new Date().getFullYear();
// Paņem pašreizējo gadu un ievieto elementā ar id "gads"

// ======== Skatījumu skaitītājs, kas glabājas lokāli pārlūkā ========
let skaits = localStorage.getItem("skaititajs") || 0; // Paņem iepriekšējo vērtību vai 0
skaits++; // Palielina skaitītāju par 1
localStorage.setItem("skaititajs", skaits); // Saglabā jauno vērtību localStorage
document.getElementById("skaititajs").textContent = skaits; // Atjaunina skatījumu skaitu lapā

// ======== Tēmas (tumšā/gaišā) pārslēgšana ========
function toggleTheme() {
  document.body.classList.toggle("dark");
  // Pārslēdz klasi "dark" uz <body>, kas maina tēmu CSS failā
}

// ======== Valodas maiņa un saglabāšana pārlūkā ========
function changeLanguage(lang) {
  // Saglabā izvēlēto valodu localStorage
  localStorage.setItem("valoda", lang);

  // Paslēpj visus valodu blokus (.lang) un parāda tikai izvēlēto
  document.querySelectorAll('.lang').forEach(el => el.classList.remove('active'));
  const activeLang = document.querySelector(`.lang.${lang}`);
  if (activeLang) activeLang.classList.add('active');

  // Atrod visus elementus ar data-lv / data-en atribūtiem un maina to tekstu
  document.querySelectorAll('[data-lv], [data-en]').forEach(el => {
    const translation = el.getAttribute(`data-${lang}`); // Paņem attiecīgās valodas tekstu
    if (translation) el.textContent = translation; // Iestata tekstu
  });
}

// ======== Ielādē saglabāto valodu, kad lapa tiek atvērta ========
window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("valoda") || "lv"; // Ja nav saglabāts, pēc noklusējuma "lv"
  changeLanguage(lang); // Piemēro valodu lapā
});