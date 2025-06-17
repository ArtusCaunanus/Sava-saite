// Iestata kārtējo gadu kā autortiesību gadu
document.getElementById("gads").textContent = new Date().getFullYear();

// Skatījumu skaitītājs, saglabāts pārlūkā
let skaits = Number(localStorage.getItem("skaititajs")) || 0;
skaits++;
localStorage.setItem("skaititajs", skaits);
document.getElementById("skaititajs").textContent = skaits;

// Tumšā/gaišā tēma pārslēgšana
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Valodas maiņa un saglabāšana
function changeLanguage(lang) {
  // Saglabā izvēlēto valodu
  localStorage.setItem("valoda", lang);

  // Rāda tikai aktīvās valodas saturu
  document.querySelectorAll(".lang").forEach(el => el.classList.remove("active"));
  const activeLang = document.querySelector(`.lang.${lang}`);
  if (activeLang) activeLang.classList.add("active");

  // Maina tekstus ar data-lv un data-en atribūtiem
  document.querySelectorAll("[data-lv], [data-en]").forEach(el => {
    const newText = el.getAttribute(`data-${lang}`);
    if (newText) el.textContent = newText;
  });
}

// Kad lapa ielādēta, pārbauda un uzstāda valodu
window.addEventListener("DOMContentLoaded", () => {
  const valoda = localStorage.getItem("valoda") || "lv";
  changeLanguage(valoda);
});