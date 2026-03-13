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
        progressBar: document.querySelector('.progress-bar'),
        timerDisplay: document.querySelector('.timer-display'),
        timerSeconds: document.querySelector('.timer-seconds'),
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

    setPromptWord: function(text, useTargetFont) {
      elements.promptWord.textContent = text;
      if (useTargetFont) {
        var lang = GameState.getLang();
        elements.promptWord.style.fontFamily = lang === 'japanese'
          ? 'var(--font-japanese)'
          : 'var(--font-korean)';
      } else {
        elements.promptWord.style.fontFamily = 'var(--font-primary)';
      }
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

    showTimerHUD: function() {
      elements.progressBar.classList.add('hidden');
      elements.timerDisplay.classList.remove('hidden');
    },

    showProgressHUD: function() {
      elements.progressBar.classList.remove('hidden');
      elements.timerDisplay.classList.add('hidden');
    },

    updateTimer: function(seconds) {
      elements.timerSeconds.textContent = seconds;
      if (seconds <= 5) {
        elements.timerDisplay.classList.add('timer-critical');
        elements.timerDisplay.classList.remove('timer-urgent');
      } else if (seconds <= 10) {
        elements.timerDisplay.classList.add('timer-urgent');
        elements.timerDisplay.classList.remove('timer-critical');
      } else {
        elements.timerDisplay.classList.remove('timer-urgent');
        elements.timerDisplay.classList.remove('timer-critical');
      }
    },

    disableAllOptions: function() {
      var btns = elements.optionsArea.querySelectorAll('.option-btn, .image-option');
      btns.forEach(function(btn) {
        btn.classList.add('disabled');
      });
    }
  };
})();
