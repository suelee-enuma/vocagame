// Application entry point
(function() {
  'use strict';

  function updateGameLanguage(lang) {
    var mode = GameState.getMode();
    var targetFont = lang === 'japanese' ? 'var(--font-japanese)' : 'var(--font-korean)';

    if (mode === 1) {
      // Text Quiz: update option button text and font
      document.querySelectorAll('.option-btn').forEach(function(btn) {
        var wordId = parseInt(btn.dataset.wordId, 10);
        var matches = WORD_DATA.filter(function(w) { return w.id === wordId; });
        if (matches.length > 0) {
          btn.textContent = matches[0][lang];
          btn.style.fontFamily = targetFont;
        }
      });
    } else if (mode === 3) {
      // Spell It: update prompt word to new language
      var currentWord = GameState.getCurrentWord();
      if (currentWord) {
        UI.setPromptWord(currentWord[lang], true);
      }
    }
    // Mode 2 (Image Quiz): emoji display is language-independent
  }

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

      // Update in-game text if currently playing
      var gameScreen = document.getElementById('screen-game');
      if (gameScreen.classList.contains('active')) {
        updateGameLanguage(next);
      }
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
