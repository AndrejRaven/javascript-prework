
let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber, argButtonName, buttonPaper, buttonRock, buttonScissors;
let win = 0;
let loose = 0;

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
    win += 1;
    console.log("Wygranych przez gracza: " + win);
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
    win += 1;
    console.log("Wygranych przez gracza: " + win);
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
    win += 1;
    console.log("Wygranych przez gracza: " + win);
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis');
  } else {
    printMessage('Przegrywasz :(');
    loose += 1;
    console.log("Wygranych przez computer: " + loose);
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerInput);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    clearResult();
    printResult("Player: " + win);
    printResult("Computer: " + loose);
  }

  buttonRock = document.getElementById('button-rock');
  buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
  buttonPaper = document.getElementById('button-paper');
  buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
  buttonScissors = document.getElementById('button-scissors');
  buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });



