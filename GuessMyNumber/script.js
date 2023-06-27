'use strict';

//Variables
let score = 10;
let secret = Math.trunc(Math.random() * 100) + 1;
console.log(secret);
let highscore = 0;

//Functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, secret);

  if (!guess) {
    displayMessage('No Number !!');
  } else if (guess === secret) {
    console.log('running');
    if (score > 1) {
      displayMessage('You won the game !!');
      document.querySelector('.number').textContent = secret;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.check').disabled = true;
      document.querySelector('.guess').disabled = true;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  } else if (guess !== secret) {
    if (score > 1) {
      displayMessage(guess > secret ? 'Too High !' : 'Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over !!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secret;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secret = Math.trunc(Math.random() * 5) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
});
