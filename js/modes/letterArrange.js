// Mode 3: Letter arrangement (Spell It)
window.LetterArrange = (function() {
  var selectedLetters = [];
  var attempts = 0;
  var currentWord = null;

  function resetSlots(slotsRow, tilesRow) {
    selectedLetters.forEach(function(entry) {
      entry.slot.classList.remove('filled');
      entry.slot.textContent = '';
      entry.tile.classList.remove('used');
    });
    selectedLetters = [];
  }

  function placeLetter(tile, letter, slotsRow, tilesRow) {
    var slots = slotsRow.querySelectorAll('.letter-slot');
    var nextEmpty = null;
    for (var i = 0; i < slots.length; i++) {
      if (!slots[i].classList.contains('filled')) {
        nextEmpty = slots[i];
        break;
      }
    }
    if (!nextEmpty) return;

    tile.classList.add('used');
    nextEmpty.classList.add('filled');
    nextEmpty.textContent = letter;

    selectedLetters.push({ tile: tile, slot: nextEmpty, letter: letter });

    // Check if word is complete
    var allFilled = !slotsRow.querySelector('.letter-slot:not(.filled)');
    if (allFilled) {
      var assembled = '';
      slots.forEach(function(s) { assembled += s.textContent; });
      var isCorrect = assembled.toLowerCase() === currentWord.english.toLowerCase();

      if (isCorrect) {
        slotsRow.classList.add('correct-word');
        Game.handleAnswer(true, null, null);
      } else {
        attempts++;
        slotsRow.classList.add('incorrect-word');
        setTimeout(function() {
          slotsRow.classList.remove('incorrect-word');
          if (attempts >= 3) {
            // Show correct answer briefly, then count as incorrect
            showCorrectAnswer(slotsRow);
            setTimeout(function() {
              Game.handleAnswer(false, null, null);
            }, 800);
          } else {
            resetSlots(slotsRow, tilesRow);
          }
        }, 500);
      }
    }
  }

  function showCorrectAnswer(slotsRow) {
    var slots = slotsRow.querySelectorAll('.letter-slot');
    var letters = currentWord.english.split('');
    slots.forEach(function(slot, i) {
      slot.textContent = letters[i] || '';
      slot.classList.add('filled');
    });
    slotsRow.classList.add('correct-word');
  }

  function undoLetter() {
    if (selectedLetters.length === 0) return;
    var last = selectedLetters.pop();
    last.slot.classList.remove('filled');
    last.slot.textContent = '';
    last.tile.classList.remove('used');
  }

  return {
    render: function(word) {
      selectedLetters = [];
      attempts = 0;
      currentWord = word;

      // Show Korean meaning as prompt
      UI.setPromptWord(word.korean, true);

      var container = document.createElement('div');
      container.className = 'letter-arrange-container';

      // Slots row
      var slotsRow = document.createElement('div');
      slotsRow.className = 'letter-slots';
      var letters = word.english.split('');
      letters.forEach(function(_, i) {
        var slot = document.createElement('div');
        slot.className = 'letter-slot';
        slotsRow.appendChild(slot);
      });

      // Tiles row
      var tilesRow = document.createElement('div');
      tilesRow.className = 'letter-tiles';
      var scrambled = Game.shuffle(letters.slice());
      // Make sure scrambled is different from original
      if (scrambled.join('') === letters.join('') && letters.length > 1) {
        // Swap first two
        var tmp = scrambled[0];
        scrambled[0] = scrambled[1];
        scrambled[1] = tmp;
      }

      scrambled.forEach(function(letter) {
        var tile = document.createElement('button');
        tile.className = 'letter-tile option-enter';
        tile.textContent = letter;
        tile.addEventListener('click', function() {
          if (tile.classList.contains('used')) return;
          if (GameState.isTransitioning()) return;
          placeLetter(tile, letter, slotsRow, tilesRow);
        });
        tilesRow.appendChild(tile);
      });

      // Undo button
      var undoBtn = document.createElement('button');
      undoBtn.className = 'btn-undo';
      undoBtn.textContent = '← Undo';
      undoBtn.addEventListener('click', function() {
        if (GameState.isTransitioning()) return;
        undoLetter();
      });

      container.appendChild(slotsRow);
      container.appendChild(tilesRow);
      container.appendChild(undoBtn);

      UI.setOptions(container);
    }
  };
})();
