'use strict';

//secret number create
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//default score 20
let score = 20;

//default hight score 0
let highscore = 0;

//message function use for "use of type of any message and alert"
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};


//when user click check button without any enter input
document.querySelector('.check').addEventListener('click', function () {

  //input only number string conver to number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔️ No number!');


//when user type correct number and match the secret number
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    //when match secret number correct number show and question mark hide 
    document.querySelector('.number').textContent = secretNumber;

   //when match secret number correct  than  background color green and change the bg color
    document.querySelector('body').style.backgroundColor = '#60b347';

    //when number correct width increasee
    document.querySelector('.number').style.width = '30rem';

    //when score grater than highscore save into highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
    //when guess(input) not equal to secretNumber display message too high or low
  } else if (guess !== secretNumber) {
    if (score > 1) { 
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {  
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//rest the game and refresh all number 
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //reset score and quesmark and input box input
  displayMessage('Start guessing...');
  //score save in to high score
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  
//reset background color and box width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

