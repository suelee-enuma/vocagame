// Mode 2: Image (emoji) 4-choice quiz
window.ImageChoice = {
  render: function(word) {
    var options = Game.generateDistractors(word, EMOJI_WORDS, 3);

    // Show English word as prompt
    UI.setPromptWord(word.english, false);

    var container = document.createElement('div');
    container.className = 'image-options';

    options.forEach(function(option) {
      var btn = document.createElement('button');
      btn.className = 'image-option option-enter';
      btn.dataset.wordId = option.id;

      var isCorrect = option.id === word.id;
      if (isCorrect) {
        btn.dataset.correct = 'true';
      }

      var emojiSpan = document.createElement('span');
      emojiSpan.className = 'emoji-display';
      emojiSpan.textContent = option.emoji;
      btn.appendChild(emojiSpan);

      btn.addEventListener('click', function() {
        var correctBtn = container.querySelector('[data-correct="true"]');
        Game.handleAnswer(isCorrect, btn, correctBtn);
      });

      container.appendChild(btn);
    });

    UI.setOptions(container);
  }
};
