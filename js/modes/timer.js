// Timer Mode: countdown controller
window.TimerMode = (function() {
  return {
    startCountdown: function() {
      var interval = setInterval(function() {
        var remaining = GameState.getTimerRemaining();
        remaining--;
        GameState.setTimerRemaining(remaining);
        UI.updateTimer(remaining);

        if (remaining <= 0) {
          GameState.clearTimer();
          // Wait for any answer animation to finish before ending
          var checkEnd = setInterval(function() {
            if (!GameState.isTransitioning()) {
              clearInterval(checkEnd);
              Game.endRound();
            }
          }, 50);
        }
      }, 1000);

      GameState.setTimerInterval(interval);
    }
  };
})();
