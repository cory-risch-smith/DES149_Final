//To-Do:
// 1. Debug Score
// 2. Fix weird styling
// 3. Populate game array objects with Kinu's stuff
// 4. Style Overlay
// 5. Game end screen

const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const optionC = document.getElementById('option-c');
const optionD = document.getElementById('option-d');
const optionE = document.getElementById('option-e');
const gameImage = document.getElementById('game-image');
const question = document.getElementById('question');
const overlayMessage = document.getElementById('overlay');
const nextPage = document.getElementById('nextPage');
const scoreLabel = document.getElementById('score');
const maingame = document.getElementById('maingame');
const message = document.getElementById('message');
const overlayText = document.getElementById('overlay-text');
const correctAnswer = document.getElementById('correct-answer');
const overlayBg = document.getElementById('overlayBackground');
// var options = document.getElementsByClassName('option');

const endBtn = document.getElementById('endBtn');
const restartBtn = document.getElementById('restartBtn');

const game = [
  {
    image: 'https://picsum.photos/300/200',
    question: 'What do you want to do today?',
    options: ['location', 'alphabet', 'time', 'category', 'hierarchy'],
    correctAns: 'location',
  },

  {
    image: 'https://picsum.photos/300/200',
    question: 'This is question 2',
    options: [
      'location and hierarchy',
      'alphabet',
      'time',
      'category',
      'just hierarchy',
    ],
    correctAns: 'alphabet',
  },

  {
    image: 'https://picsum.photos/300/200',
    question: 'How many elephants are in this pic?',
    options: [
      'location and hierarchy',
      'alphabet',
      'time',
      'category',
      'just hierarchy',
    ],
    correctAns: 'time',
  },
];

var score = -1;

var i = 0;

overlayMessage.style.display = 'none';

function playGame() {
  //Question 1

  for (let option of document.getElementsByClassName('option')) {
    option.addEventListener('click', function () {
      console.log('Option clicked');
      if (this.textContent === game[i].correctAns) {
        //Turn on Success overlay
        maingame.style.display = 'none';
        overlayMessage.style.display = 'flex';
        overlayBg.style.display = 'block';
        message.textContent = 'Congratulations!';
        message.style.color = 'green';
        overlayText.textContent = 'You are great! No studying for you!';
        correctAnswer.textContent = `The correct LATCH principle is ${game[i].correctAns}.`;
      } else {
        // Turn on failure overlay
        maingame.style.display = 'none';
        overlayMessage.style.display = 'flex';
        overlayBg.style.display = 'block';
        message.textContent = 'Wrong answer, please try again!';
        message.style.color = 'red';
        correctAnswer.textContent = `The correct LATCH principle is ${game[i].correctAns}.`;
        overlayText.textContent = 'You are so close, please go study more.';
        scoreLabel.textContent = `Score: ${score}`;
      }
    });
    if (option.textContent === game[i].correctAns) {
      score++;
      scoreLabel.textContent = `Score: ${score}`;
    }
  }

  // when proceed is clicked, increment i and display the new page.
  nextPage.addEventListener('click', function () {
    overlayMessage.style.display = 'none';
    maingame.style.display = 'flex';
    if (i == game.length - 1) {
      endGame();
      //Where we call end of game page.
    }
    i++;
    pageDisplay(i);
    playGame();
  });
}

function endGame() {
  maingame.style.display = 'none';
  overlayMessage.style.display = 'flex';
  overlayBg.style.display = 'block';
  scoreLabel.textContent = `Score: ${score}`;

  //Message
  message.textContent = 'GAME OVER!';
  message.style.color = 'orange';
  overlayText.textContent = `Congratulations, you scored ${score} points! Would you like to play again?`;

  //   Add start and end buttons that refresh game
  endBtn.addEventListener('click', function () {
    window.location.reload();
  });
  restartBtn.addEventListener('click', function () {
    window.location.reload();
  });
}

function pageDisplay(pageIndex) {
  overlayBg.style.display = 'none';
  gameImage.setAttribute('src', game[pageIndex].image);
  question.textContent = game[pageIndex].question;
  optionA.textContent = game[pageIndex].options[0];
  optionB.textContent = game[pageIndex].options[1];
  optionC.textContent = game[pageIndex].options[2];
  optionD.textContent = game[pageIndex].options[3];
  optionE.textContent = game[pageIndex].options[4];
}

pageDisplay(i);
playGame();
