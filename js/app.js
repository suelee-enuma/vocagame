// Application entry point
(function() {
  'use strict';

  function updateLanguageUI(lang) {
    // Update subtitle
    var subtitleLang = document.querySelector('.subtitle-lang');
    subtitleLang.textContent = lang === 'japanese' ? '日本語' : '한국어';

    // Update subtitle font
    var subtitle = document.querySelector('.game-subtitle');
    subtitle.style.fontFamily = lang === 'japanese'
      ? 'var(--font-japanese)'
      : 'var(--font-korean)';

    // Update mode descriptions
    document.querySelectorAll('.mode-desc').forEach(function(desc) {
      desc.textContent = lang === 'japanese' ? desc.dataset.ja : desc.dataset.ko;
      desc.style.fontFamily = lang === 'japanese'
        ? 'var(--font-japanese)'
        : 'var(--font-korean)';
    });

    // Update Text Quiz badge characters
    var badge1 = document.querySelector('.badge-text-1');
    var badge2 = document.querySelector('.badge-text-2');
    var badge3 = document.querySelector('.badge-text-3');
    if (badge1 && badge2 && badge3) {
      if (lang === 'japanese') {
        badge1.textContent = 'あ';
        badge2.textContent = 'い';
        badge3.textContent = 'う';
      } else {
        badge1.textContent = '가';
        badge2.textContent = '나';
        badge3.textContent = '다';
      }
    }

    // Toggle flag icons
    var flagKorean = document.getElementById('flag-korean');
    var flagJapanese = document.getElementById('flag-japanese');
    if (flagKorean && flagJapanese) {
      flagKorean.classList.toggle('hidden', lang !== 'korean');
      flagJapanese.classList.toggle('hidden', lang !== 'japanese');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    UI.init();

    // Set initial background color
    UI.setBackgroundColor(COLOR_PALETTE[0]);

    // Floating language toggle
    var langToggle = document.querySelector('.lang-toggle');
    langToggle.addEventListener('click', function() {
      var current = GameState.getLang();
      var next = current === 'korean' ? 'japanese' : 'korean';
      GameState.setLang(next);
      updateLanguageUI(next);
    });

    // Mode selection
    document.querySelectorAll('.mode-card').forEach(function(card) {
      card.addEventListener('click', function() {
        var mode = parseInt(card.dataset.mode, 10);
        Game.start(mode);
      });
    });

    // Back to menu
    document.querySelector('.btn-back').addEventListener('click', function() {
      UI.showScreen('screen-menu');
      UI.setBackgroundColor(COLOR_PALETTE[0]);
    });

    // Results screen buttons
    document.querySelector('.btn-replay').addEventListener('click', function() {
      Game.start(GameState.getMode());
    });

    document.querySelector('.btn-menu').addEventListener('click', function() {
      UI.showScreen('screen-menu');
      UI.setBackgroundColor(COLOR_PALETTE[0]);
    });
  });
})();
