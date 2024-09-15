const getComputerChoice = function () {
  const choice = ['rock', 'paper', 'scissors'];

  return choice[Math.floor(Math.random() * 3)];
};

const getHumanChoice = function () {
  return prompt('Rock, Paper, or Scissors?').toLowerCase();
};

const playRound = function (humanChoice, computerChoice) {
  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'scissors') {
        console.log('You win! "Rock" beats "Scissors"');
        return true;
      } else if (computerChoice === 'paper') {
        console.log('You lose! "Paper" beats "Rock"');
        return false;
      }
      break;

    case 'paper':
      if (computerChoice === 'rock') {
        console.log('You win! "Paper" beats "Rock"');
        return true;
      } else if (computerChoice === 'scissors') {
        console.log('You lose! "Scissors" beats "Paper"');
        return false;
      }
      break;

    case 'scissors':
      if (computerChoice === 'paper') {
        console.log('You win! "Scissors" beats "Paper"');
        return true;
      } else if (computerChoice === 'rock') {
        console.log('You lose! "Rock" beats "Scissors"');
        return false;
      }
      break;

    default:
      console.log('You must choose: "Rock", "Paper", or "Scissors" only!');
  }
};

const playGame = function (playRounds, rounds) {
  let humanScore = 0,
    botScore = 0;

  while (rounds > 0) {
    const results = playRounds();
    if (results === true) {
      humanScore++;
      rounds--;
    }
    if (results === false) {
      botScore++;
      rounds--;
    }
  }

  if (rounds === 0) {
    return humanScore > botScore
      ? `You win! You: ${humanScore} | Computer: ${botScore}`
      : `The computer win! You: ${humanScore} | Computer: ${botScore}`;
  }
};

const results = playGame(
  () => playRound(getHumanChoice(), getComputerChoice()),
  5
);

console.log(results);
