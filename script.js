'using strict mode';

let score = 20; // Variable to store the value of the score.

let highscore = 0; // Variable to store the highscore.

let snumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When no input is entered.
  if (!guess) {
    document.querySelector('.message').textContent = 'NO NUMBER ENTERED!';
  }

  // When input matches the random number.
  else if (guess === snumber) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When input does not match the random number.
  else {
    // If entered number is less than the random number.
    if (snumber < guess) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          'Your Guess is too high!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lost the Game!';
        document.querySelector('.score').textContent = 0;
        alert('You lost the Game!!');
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').textContent = snumber;
      }
    }

    // When entered number is more than the random number.
    else {
      if (score > 1) {
        document.querySelector('.message').textContent =
          'Your Guess is too low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lost the Game!';
        document.querySelector('.score').textContent = 0;
        alert('You lost the Game!!');
        document.querySelector('body').style.backgroundColor = 'red';
        document.querySelector('.number').textContent = snumber;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  snumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
