// Note: added features:
// --> Tie functionality
// --> Restart button: with bot or player reached 5 points
// --> announcing the results during the game
// --> optimize javascript

const humanChoice = document.querySelector('#player-choice');
const scoreBoard = document.querySelector('.score-board');
const playerScore = document.querySelector('.p-score');
const cpuScore = document.querySelector('.b-score');

let humanScore = 0,
  botScore = 0;

// for anouncing the winner
const announceWinner = function (humanScore, botScore) {
  const score = document.createElement('span');
  scoreBoard.appendChild(score);

  if (humanScore === 5) {
    score.textContent = 'You Win!';
  } else if (botScore === 5) {
    score.textContent = 'Bot Win!';
  }
};

// bot choice algorithm
const computerChoice = function () {
  const choice = ['rock', 'paper', 'scissors'];

  return choice[Math.floor(Math.random() * 3)];
};

// playing round
const playRound = function (humanChoice) {
  switch (humanChoice) {
    case 'rock':
      if (computerChoice() === 'scissors') {
        return true;
      } else if (computerChoice() === 'paper') {
        return false;
      }
      break;

    case 'paper':
      if (computerChoice() === 'rock') {
        return true;
      } else if (computerChoice() === 'scissors') {
        return false;
      }
      break;

    case 'scissors':
      if (computerChoice() === 'paper') {
        return true;
      } else if (computerChoice() === 'rock') {
        return false;
      }
      break;
  }
};

const playGame = function (e) {
  const target = e.target;

  let results = playRound(target.className);
  if (results === true) {
    humanScore++;
    playerScore.textContent = humanScore;
  } else {
    botScore++;
    cpuScore.textContent = botScore;
  }

  if (humanScore === 5 || botScore === 5) {
    announceWinner(humanScore, botScore);
  }
};

humanChoice.addEventListener('click', playGame);
