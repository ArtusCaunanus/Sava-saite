// Autortiesību gads
document.getElementById("gads").textContent = new Date().getFullYear();

// Skatījumu skaitītājs
let skaits = localStorage.getItem("skaititajs") || 0;
skaits++;
localStorage.setItem("skaititajs", skaits);
document.getElementById("skaititajs").textContent = skaits;

// Tumšā/gaišā tēma
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Valodas maiņa ar saglabāšanu
function changeLanguage(lang) {
  // Saglabā valodu localStorage
  localStorage.setItem("valoda", lang);

  // Parāda tikai aktīvo valodas bloku
  document.querySelectorAll('.lang').forEach(el => el.classList.remove('active'));
  const activeLang = document.querySelector(`.lang.${lang}`);
  if (activeLang) activeLang.classList.add('active');

  // Nomaina visus tekstus ar data-lv / data-en atribūtiem
  document.querySelectorAll('[data-lv], [data-en]').forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation) el.textContent = translation;
  });
}

// Ielādē valodu pēc lapas ielādes
window.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("valoda") || "lv";
  changeLanguage(lang);
});
