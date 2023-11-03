function checkGuess() {
    var computerNumber = Math.floor(Math.random() * 20) + 1;
    var userNumber = parseInt(document.getElementById("guessNumber").value);
  
    if (userNumber === computerNumber) {
      document.getElementById("result").innerHTML = "Поздравляю, вы угадали число " + computerNumber + "!";
    } else if (userNumber < computerNumber) {
      document.getElementById("result").innerHTML = "Загаданное число больше.";
    } else {
      document.getElementById("result").innerHTML = "Загаданное число меньше.";
    }
  }