// L'utente deve dare in imput email e nome. Solo se la mail è in lista potrà giocare al gioco.

// Inizializzo array lista email
var list = ["shawn@gmail.com", "liam@gmail.com", "ethan@gmail.com"];

// Imput email
var email = prompt("Please enter a valid email:");

//Imput name
var player = prompt("What is your name?");

// Controllare se la mail sia sulla lista (for, if)
var error = false;

for (var i = 0; i < list.length; i++) {
  if (list[i] == email) {
    error = true;
  }
}

if (error) {
  document.getElementById('checkMessage').innerHTML = "Great, you're on the list, you may play the game";
  // Generare 2 numeri a caso tra 1 e 6
  var diceNumber = [];
  for (var i = 0; i < 2; i++) {
    var number = Math.floor(Math.random() * 6) + 1;
    diceNumber.push(number);
  } //lo metto qui cosi solo se la mail è valida mi genera i numeri
} else {
  document.getElementById('checkMessage').innerHTML = player + " you're not on the list, you can't play";
}

//Printo il risultato dei dadi

document.getElementById('result1').innerHTML = player + "'s number: " + diceNumber[0];
document.getElementById('result2').innerHTML = "My number: " + diceNumber[1];

// Controllo quale sia il numero maggiore
if (diceNumber[0] > diceNumber[1]) {
  document.getElementById('winner').innerHTML = player + " , you win this thime. Next time i'll beat you!";
} else if (diceNumber[0] == diceNumber[1]) {
  document.getElementById('winner').innerHTML = "Nobody wins!";
} else {
  document.getElementById('winner').innerHTML = "Ha! I win!";
}
