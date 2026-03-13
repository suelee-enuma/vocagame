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

      if (GameState.isTimerMode()) {
        UI.showTimerHUD();
        UI.updateTimer(GameState.getTimerRemaining());
        TimerMode.startCountdown();
      } else {
        UI.showProgressHUD();
      }

      this.showNextQuestion();
    },

    showNextQuestion: function() {
      var word = GameState.getCurrentWord();
      var color = GameState.getCurrentColor();
      UI.setBackgroundColor(color);
      var score = GameState.getScore();
      UI.updateScore(score.correct, score.total);

      if (!GameState.isTimerMode()) {
        UI.updateProgress(GameState.getProgress());
      }

      var mode = GameState.getMode();

      if (mode === 4) {
        // Timer mode: randomly pick Text or Image quiz
        var subMode = Math.random() < 0.5 ? 1 : 2;
        // Force text mode if word has no emoji
        if (!word.emoji) {
          subMode = 1;
        }
        GameState.setCurrentSubMode(subMode);
        if (subMode === 1) {
          TextChoice.render(word);
        } else {
          ImageChoice.render(word);
        }
      } else {
        switch (mode) {
          case 1: TextChoice.render(word); break;
          case 2: ImageChoice.render(word); break;
          case 3: LetterArrange.render(word); break;
        }
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
        // Check if timer ran out during answer animation
        if (GameState.isTimerMode() && GameState.getTimerRemaining() <= 0) {
          self.endRound();
          GameState.setTransitioning(false);
          return;
        }

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
      GameState.clearTimer();
      var score = GameState.getScore();
      UI.renderResults(score);
      UI.showScreen('screen-results');
    }
  };
})();
