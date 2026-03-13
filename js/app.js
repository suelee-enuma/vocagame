// Application entry point
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    UI.init();

    // Set initial background color
    UI.setBackgroundColor(COLOR_PALETTE[0]);

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
