`use strict`;

//use for random number function
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = 
secretNumber;

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 
        'No number!';
    } else if (guess === secretNumber) {
       document.querySelector('.message').textContent = 
       'Correct Number!';
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
            'Too hight!';
            score--;
            document.querySelector('.score').textContent =
            score;
        } else {
            document.querySelector('.message').textContent
            = 'You lost the game! ';
        }
      
    }
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent =
            'Too Low';
            score--;
            document.querySelector('.score').textContent =
            score;
        } else {
            document.querySelector('.message').textContent
            = 'You lost the game! ';
        }
    }

});