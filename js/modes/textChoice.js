// Mode 1: Text 4-choice quiz
window.TextChoice = {
  render: function(word) {
    var lang = GameState.getLang();
    var options = Game.generateDistractors(word, WORD_DATA, 3);

    // Show English word as prompt
    UI.setPromptWord(word.english, false);

    var container = document.createElement('div');
    container.className = 'text-options';

    var targetFont = lang === 'japanese' ? 'var(--font-japanese)' : 'var(--font-korean)';

    options.forEach(function(option) {
      var btn = document.createElement('button');
      btn.className = 'option-btn option-enter';
      btn.textContent = option[lang];
      btn.style.fontFamily = targetFont;
      btn.dataset.wordId = option.id;

      var isCorrect = option.id === word.id;
      if (isCorrect) {
        btn.dataset.correct = 'true';
      }

      btn.addEventListener('click', function() {
        var correctBtn = container.querySelector('[data-correct="true"]');
        Game.handleAnswer(isCorrect, btn, correctBtn);
      });

      container.appendChild(btn);
    });

    UI.setOptions(container);
  }
};
