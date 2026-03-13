// Core game engine
window.Game = (function() {

  function shuffle(array) {
    var arr = array.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function generateDistractors(correctWord, pool, count) {
    count = count || 3;
    var filtered = pool.filter(function(w) {
      return w.id !== correctWord.id;
    });
    var shuffled = shuffle(filtered);
    var distractors = shuffled.slice(0, count);
    return shuffle([correctWord].concat(distractors));
  }

  return {
    shuffle: shuffle,
    generateDistractors: generateDistractors,

    start: function(mode) {
      GameState.initRound(mode);
      UI.showScreen('screen-game');
      this.showNextQuestion();
    },

    showNextQuestion: function() {
      var word = GameState.getCurrentWord();
      var color = GameState.getCurrentColor();
      UI.setBackgroundColor(color);
      UI.updateProgress(GameState.getProgress());
      var score = GameState.getScore();
      UI.updateScore(score.correct, score.total);

      var mode = GameState.getMode();
      switch (mode) {
        case 1: TextChoice.render(word); break;
        case 2: ImageChoice.render(word); break;
        case 3: LetterArrange.render(word); break;
      }
    },

    handleAnswer: function(correct, selectedEl, correctEl) {
      if (GameState.isTransitioning()) return;
      GameState.setTransitioning(true);

      GameState.recordAnswer(correct);

      // Update score immediately
      var score = GameState.getScore();
      UI.updateScore(score.correct, score.total);

      if (correct) {
        if (selectedEl) selectedEl.classList.add('correct');
        UI.disableAllOptions();
      } else {
        if (selectedEl) selectedEl.classList.add('incorrect');
        if (correctEl) correctEl.classList.add('correct');
        UI.disableAllOptions();
      }

      var delay = correct ? 700 : 1200;
      var self = this;

      setTimeout(function() {
        var hasMore = GameState.advanceQuestion();
        if (hasMore) {
          self.showNextQuestion();
        } else {
          self.endRound();
        }
        GameState.setTransitioning(false);
      }, delay);
    },

    endRound: function() {
      var score = GameState.getScore();
      UI.renderResults(score);
      UI.showScreen('screen-results');
    }
  };
})();
