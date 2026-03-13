// Game state management
window.GameState = (function() {
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  var state = {
    currentMode: 1,
    wordPool: [],
    currentIndex: 0,
    totalQuestions: 20,
    score: {
      correct: 0,
      incorrect: 0,
      streak: 0,
      answers: []
    },
    currentColorIndex: 0,
    isTransitioning: false
  };

  return {
    getMode: function() {
      return state.currentMode;
    },

    getCurrentWord: function() {
      return state.wordPool[state.currentIndex];
    },

    getProgress: function() {
      return (state.currentIndex + 1) / state.totalQuestions;
    },

    getProgressText: function() {
      return (state.currentIndex + 1) + ' / ' + state.totalQuestions;
    },

    getScore: function() {
      return {
        correct: state.score.correct,
        incorrect: state.score.incorrect,
        streak: state.score.streak,
        total: state.score.correct + state.score.incorrect
      };
    },

    isTransitioning: function() {
      return state.isTransitioning;
    },

    setTransitioning: function(val) {
      state.isTransitioning = val;
    },

    getCurrentColor: function() {
      return COLOR_PALETTE[state.currentColorIndex % COLOR_PALETTE.length];
    },

    isRoundComplete: function() {
      return state.currentIndex >= state.totalQuestions;
    },

    initRound: function(mode, questionCount) {
      questionCount = questionCount || 20;
      state.currentMode = mode;
      state.currentIndex = 0;
      state.totalQuestions = questionCount;
      state.score = { correct: 0, incorrect: 0, streak: 0, answers: [] };
      state.currentColorIndex = Math.floor(Math.random() * COLOR_PALETTE.length);
      state.isTransitioning = false;

      // Pick word pool based on mode
      var source = (mode === 2) ? EMOJI_WORDS : WORD_DATA;
      var shuffled = shuffle(source.slice());
      // If we have fewer words than questions, cycle through
      state.wordPool = [];
      while (state.wordPool.length < questionCount) {
        if (state.wordPool.length === 0) {
          state.wordPool = shuffled.slice(0, questionCount);
        } else {
          state.wordPool = state.wordPool.concat(shuffle(source.slice()));
        }
      }
      state.wordPool = state.wordPool.slice(0, questionCount);
    },

    recordAnswer: function(correct) {
      if (correct) {
        state.score.correct++;
        state.score.streak++;
      } else {
        state.score.incorrect++;
        state.score.streak = 0;
      }
      state.score.answers.push({
        wordId: state.wordPool[state.currentIndex].id,
        correct: correct
      });
    },

    advanceQuestion: function() {
      state.currentIndex++;
      state.currentColorIndex++;
      return state.currentIndex < state.totalQuestions;
    }
  };
})();
