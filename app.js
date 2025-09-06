const moves = ['rock','paper','scissors','lizard','spock'];
const winsAgainst = {
  rock:     ['scissors','lizard'],
  paper:    ['rock','spock'],
  scissors: ['paper','lizard'],
  lizard:   ['spock','paper'],
  spock:    ['scissors','rock']
};

let userScore = 0, compScore = 0;

const userScoreEl = document.getElementById('user-score');
const compScoreEl = document.getElementById('comp-score');
const msgEl = document.getElementById('msg');

document.querySelectorAll('.choice').forEach(el => {
  el.addEventListener('click', () => playRound(el.dataset.move));
});

function playRound(userMove) {
  const compMove = moves[Math.floor(Math.random() * moves.length)];
  if (userMove === compMove) {
    showMessage(`Draw! You both chose ${userMove}.`, 'draw');
  } else if (winsAgainst[userMove].includes(compMove)) {
    userScore++;
    userScoreEl.textContent = userScore;
    showMessage(`You win! ${capitalize(userMove)} beats ${compMove}.`, 'win');
  } else {
    compScore++;
    compScoreEl.textContent = compScore;
    showMessage(`You lose! ${capitalize(compMove)} beats ${userMove}.`, 'lose');
  }
}

function showMessage(text, type) {
  msgEl.textContent = text;
  msgEl.className = type;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
