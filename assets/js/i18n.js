// i18n.js - simple dictionary-based translator using data-key attributes
(function () {
  function getStoredLang() {
    return localStorage.getItem('lang') || 'hu';
  }

  function setStoredLang(lang) {
    localStorage.setItem('lang', lang);
  }

  function applyTranslations(lang) {
    if (!window.translations || !window.translations[lang]) return;
    const dict = window.translations[lang];
    document.querySelectorAll('[data-key]').forEach((el) => {
      const key = el.getAttribute('data-key');
      if (!key) return;
      const text = dict[key];
      if (text === undefined) return;
      if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
        el.placeholder = text;
      } else if (el.tagName.toLowerCase() === 'img') {
        el.alt = text;
      } else {
        el.innerHTML = text;
      }
    });
    
    // Swap images based on language
    const imgKey = lang === 'hu' ? 'data-img-hu' : 'data-img-ro';
    document.querySelectorAll('img[data-img-hu][data-img-ro]').forEach((img) => {
      const newSrc = img.getAttribute(imgKey);
      if (newSrc) {
        img.src = newSrc;
      }
    });
    
    // Hide current language button and show only the other language (desktop)
    document.querySelectorAll('.lang-switch-nav button').forEach(btn => {
      if (btn.dataset.lang === lang) {
        btn.style.display = 'none';
      } else {
        btn.style.display = '';
      }
    });
    // On mobile, always show both language buttons
    document.querySelectorAll('.mobile-lang-switch button').forEach(btn => {
      btn.style.display = '';
    });
  }

  window.setLanguage = function (lang) {
    setStoredLang(lang);
    applyTranslations(lang);
    // update active state on buttons if present
    // Desktop nav: hide current, show other
    document.querySelectorAll('.lang-switch-nav button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      if (btn.dataset.lang === lang) {
        btn.style.display = 'none';
      } else {
        btn.style.display = '';
      }
    });
    // Mobile: always show both
    document.querySelectorAll('.mobile-lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.style.display = '';
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    const lang = getStoredLang();
    // ensure translations are available (translations.js should be loaded before this file)
    applyTranslations(lang);
    // bind lang switcher controls
    document.querySelectorAll('.lang-switch button[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.setLanguage(btn.dataset.lang);
      });
    });
  });
})();
