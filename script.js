let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const message = document.querySelector('.message');
const number = document.querySelector('.number');
const body = document.querySelector('body');
let guess = document.querySelector('.guess');
let score1 = document.querySelector('.score');
// let highscore1 = document.querySelector('.highscorel1');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  if (!guess) {
    message.textContent = '⛔No Number';
  } else if (guess === secretNumber) {
    message.textContent = 'corret number🎉';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '300px';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      score = score - 1;
      score1.textContent = score;
      message.textContent = '📈Too High';
    } else {
      message.textContent = 'You lose thre game🔥';
      score1.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      score1.textContent = score;
      message.textContent = '📉Too Low';
    } else {
      message.textContent = 'You lose thre game🔥';
      score.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  message.textContent = 'start guessing.....🤔';
  numbertextContent = '?';
  guess.value = '';
  score.textContent = 20;
  body.style.backgroundColor = '#222';
  number.style.width = '150px';
});
