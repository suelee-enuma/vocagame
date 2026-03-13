// UI rendering and DOM manipulation
window.UI = (function() {
  var elements = {};

  return {
    init: function() {
      elements = {
        menuScreen: document.getElementById('screen-menu'),
        gameScreen: document.getElementById('screen-game'),
        resultsScreen: document.getElementById('screen-results'),
        promptWord: document.querySelector('.prompt-word'),
        optionsArea: document.querySelector('.options-area'),
        progressFill: document.querySelector('.progress-fill'),
        scoreCorrect: document.querySelector('.score-correct'),
        scoreTotal: document.querySelector('.score-total'),
        scorePercentage: document.querySelector('.score-percentage'),
        correctCount: document.querySelector('.correct-count'),
        incorrectCount: document.querySelector('.incorrect-count'),
      };
    },

    showScreen: function(screenId) {
      document.querySelectorAll('.screen').forEach(function(s) {
        s.classList.remove('active');
      });
      document.getElementById(screenId).classList.add('active');
    },

    setBackgroundColor: function(color) {
      document.documentElement.style.setProperty('--bg-color', color);
    },

    setPromptWord: function(text, useKoreanFont) {
      elements.promptWord.textContent = text;
      elements.promptWord.style.fontFamily = useKoreanFont
        ? 'var(--font-korean)'
        : 'var(--font-primary)';
      // Re-trigger animation
      elements.promptWord.style.animation = 'none';
      // Force reflow
      void elements.promptWord.offsetHeight;
      elements.promptWord.style.animation = '';
    },

    setOptions: function(container) {
      elements.optionsArea.innerHTML = '';
      elements.optionsArea.appendChild(container);
    },

    updateProgress: function(fraction) {
      elements.progressFill.style.width = (fraction * 100) + '%';
    },

    updateScore: function(correct, total) {
      elements.scoreCorrect.textContent = correct;
      elements.scoreTotal.textContent = total;
    },

    renderResults: function(score) {
      var total = score.correct + score.incorrect;
      var pct = total > 0 ? Math.round((score.correct / total) * 100) : 0;
      elements.scorePercentage.textContent = pct + '%';
      elements.correctCount.textContent = score.correct;
      elements.incorrectCount.textContent = score.incorrect;
    },

    disableAllOptions: function() {
      var btns = elements.optionsArea.querySelectorAll('.option-btn, .image-option');
      btns.forEach(function(btn) {
        btn.classList.add('disabled');
      });
    }
  };
})();
