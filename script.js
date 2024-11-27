// Note: added features:
// --> Restart button: with bot or player reached 5 points
// --> optimize javascript

const humanChoice = document.querySelector('#player-choice');
const scoreBoard = document.querySelector('.score-board');
const playerScore = document.querySelector('.p-score');
const cpuScore = document.querySelector('.b-score');

const score = document.createElement('span');
scoreBoard.appendChild(score);

let humanScore = 0,
  botScore = 0;

// for anouncing the winner
const announceWinner = function (humanScore, botScore) {
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
  const botChoice = computerChoice();

  switch (humanChoice) {
    case 'rock':
      if (botChoice === 'scissors') {
        score.textContent = `You win! "Rock" beats "Scissors"`;
        return true;
      } else if (botChoice === 'paper') {
        score.textContent = `You lose! "Paper" beats "Rock"`;
        return false;
      } else {
        score.textContent = `Player and Bot are "Rock"! Its a TIE!`;
      }
      break;

    case 'paper':
      if (botChoice === 'rock') {
        score.textContent = `You win! "Paper" beats "Rock"`;
        return true;
      } else if (botChoice === 'scissors') {
        score.textContent = `You lose! "Scissors" beats "Paper"`;
        return false;
      } else {
        score.textContent = `Player and Bot are "Paper"! Its a TIE!`;
      }
      break;

    case 'scissors':
      if (botChoice === 'paper') {
        score.textContent = `You win! "Scissors" beats "Paper"`;
        return true;
      } else if (botChoice === 'rock') {
        score.textContent = `You lose! "Rock" beats "Scissors"`;
        return false;
      } else {
        score.textContent = `Player and Bot are "Scissors"! Its a TIE!`;
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
  } else if (results === false) {
    botScore++;
    cpuScore.textContent = botScore;
  }

  if (humanScore === 5 || botScore === 5) {
    announceWinner(humanScore, botScore);
  }
};

humanChoice.addEventListener('click', playGame);
