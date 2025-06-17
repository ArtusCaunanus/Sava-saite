// Iestata aktuālo gadu kājenei
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("gads").textContent = new Date().getFullYear();

  // Ielādē un atjaunina skatījumu skaitītāju
  let skaits = parseInt(localStorage.getItem("skaititajs") || "0", 10);
  skaits++;
  localStorage.setItem("skaititajs", skaits.toString());
  document.getElementById("skaititajs").textContent = skaits;

  // Ielādē valodu no localStorage vai iestata "lv"
  const lang = localStorage.getItem("valoda") || "lv";
  changeLanguage(lang);
});

/**
 * Pārslēdz starp tumšo un gaišo režīmu.
 */
function toggleTheme() {
  document.body.classList.toggle("dark");
}

/**
 * Maina lapas valodu un saglabā izvēli.
 * @param {string} lang - 'lv' vai 'en'
 */
function changeLanguage(lang) {
  // Saglabā izvēlēto valodu
  localStorage.setItem("valoda", lang);

  // Aktivizē tikai atbilstošo valodas bloku
  document.querySelectorAll('.lang').forEach(el => {
    el.classList.remove('active');
  });

  const activeLang = document.querySelector(`.lang.${lang}`);
  if (activeLang) {
    activeLang.classList.add('active');
  }

  // Nomaina saturu elementiem ar data-lv un data-en atribūtiem
  document.querySelectorAll('[data-lv], [data-en]').forEach(el => {
    const translation = el.getAttribute(`data-${lang}`);
    if (translation !== null) {
      el.textContent = translation;
    }
  });
}