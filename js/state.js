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
    currentLang: 'korean',
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
    isTransitioning: false,
    // Timer mode fields
    timerMode: false,
    timerDuration: 60,
    timerRemaining: 60,
    timerInterval: null,
    currentSubMode: 1
  };

  return {
    getMode: function() {
      return state.currentMode;
    },

    getLang: function() {
      return state.currentLang;
    },

    setLang: function(lang) {
      state.currentLang = lang;
    },

    getCurrentWord: function() {
      return state.wordPool[state.currentIndex];
    },

    getProgress: function() {
      if (state.timerMode) {
        return state.timerRemaining / state.timerDuration;
      }
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
      if (state.timerMode) return false;
      return state.currentIndex >= state.totalQuestions;
    },

    // Timer mode accessors
    isTimerMode: function() {
      return state.timerMode;
    },

    getTimerRemaining: function() {
      return state.timerRemaining;
    },

    setTimerRemaining: function(val) {
      state.timerRemaining = val;
    },

    clearTimer: function() {
      if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
      }
    },

    setTimerInterval: function(interval) {
      state.timerInterval = interval;
    },

    getCurrentSubMode: function() {
      return state.currentSubMode;
    },

    setCurrentSubMode: function(subMode) {
      state.currentSubMode = subMode;
    },

    initRound: function(mode, questionCount) {
      // Clear any existing timer
      if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
      }

      state.timerMode = (mode === 4);
      state.currentMode = mode;
      state.currentIndex = 0;
      state.score = { correct: 0, incorrect: 0, streak: 0, answers: [] };
      state.currentColorIndex = Math.floor(Math.random() * COLOR_PALETTE.length);
      state.isTransitioning = false;

      if (state.timerMode) {
        state.totalQuestions = Infinity;
        state.timerRemaining = state.timerDuration;
        state.currentSubMode = 1;
        // Build initial pool of shuffled words
        state.wordPool = shuffle(WORD_DATA.slice()).slice(0, 10);
      } else {
        questionCount = questionCount || 20;
        state.totalQuestions = questionCount;
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
      }
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

      if (state.timerMode) {
        // Replenish: add a random word for the next question
        var randomWord = WORD_DATA[Math.floor(Math.random() * WORD_DATA.length)];
        state.wordPool.push(randomWord);
        return true; // always more questions in timer mode
      }

      return state.currentIndex < state.totalQuestions;
    }
  };
})();
