// frontend/navbar.js
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
    applyLanguagePreference();
  });

function applyLanguagePreference() {
  const lang = localStorage.getItem('preferredLang') || 'en';
  const select = document.getElementById('languageSelect');
  if (select) select.value = lang;
  updateLanguage(lang);

  select?.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem('preferredLang', selectedLang);
    updateLanguage(selectedLang);
  });
}

function updateLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.add('hidden');
    if (el.dataset.lang === lang) el.classList.remove('hidden');
  });
}



