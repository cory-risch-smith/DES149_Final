//To-Do:
// 1. Populate game array objects with Kinu's stuff
// 2. Test on chrome and safari 

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
const overlayImg = document.getElementById('overlay-image');
const locationLabel = document.getElementById('location');

const optionsElement = document.getElementById('options');

const endBtn = document.getElementById('endBtn');
const restartBtn = document.getElementById('restartBtn');

const game = [
  {
    location: 'The Quad',
    image: '../images/Optimized-img1.jpg',
    question: 'Which LATCH principle is primarily utilized?',
    options: ['Location', 'Alphabet', 'Time', 'Category', 'Hierarchy'],
    correctAns: 'Category',
  },

  {
    location: 'Latitude Cafe',
    image: '../images/Optimized-img2.jpg',
    question: 'What design principle(s) does this sign implement well?',
    options: [
      'Unified Color Palette',
      'Text Hierarchy',
      'Spacing',
      'All of the above',
      'None of the above',
    ],
    correctAns: 'All of the above',
  },

  {
    location: 'Sciences Laboratory',
    image: '../images/Optimized-img3.jpg',
    question: 'What design principle(s) does this sign implement well?',
    options: [
      'Simple Color Palette',
      'Relevant Imagery',
      'Text Hierarchy',
      'Good Title',
      'All of the above',
    ],
    correctAns: 'All of the above',
  },
  {
    location: 'Segundo',
    image: '../images/Optimized-img4.jpg',
    question: 'Which LATCH principle is primarily utilized?',
    options: [
      'Location',
      'Alphabet',
      'Time',
      'Category',
      'Hierarchy',
    ],
    correctAns: 'Location',
  },
  {
    location: 'Tercero',
    image: '../images/Optimized-img5.jpg',
    question: 'Which LATCH principle is primarily utilized?',
    options: [
      'Location',
      'Alphabet',
      'Time',
      'Category',
      'Hierarchy',
    ],
    correctAns: 'Location',
  },
  {
    location: 'Cuarto',
    image: '../images/Optimized-img7.jpg',
    question: 'What information design aspect could be altered to improve this poster?',
    options: [
      'More Imagery',
      'Brighter Colors',
      'Stronger Text Hierarchy',
      'Both A and B',
      'None of the above',
    ],
    correctAns: 'Stronger Text Hierarchy',
  },
  {
    location: 'Tercero',
    image: '../images/Optimized-img8.jpg',
    question: 'What design principle(s) does this sign implement well?',
    options: [
      'Text Hierarchy',
      'Simple Color Palette',
      'Comprehensive Charts',
      'Both A and B',
      'None of the above',
    ],
    correctAns: 'Both A and B',
  },
];

var score = 0;
var i = 0;

overlayMessage.style.display = 'none';

resetState();
pageDisplay(i);

// when next is clicked, increment i and display the new page.
nextPage.addEventListener('click', function() {
    overlayMessage.style.display = 'none';
    maingame.style.display = 'flex';
    if (i == game.length - 1) {
        endGame();
        return;
    }
    i++;
    resetState();
    pageDisplay(i);
});
// }

function resetState() {
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
}

function pageDisplay(pageIndex) {
  locationLabel.textContent = game[pageIndex].location;
  overlayBg.style.display = 'none';
  gameImage.setAttribute('src', game[pageIndex].image);
  question.textContent = game[pageIndex].question;

  game[i].options.forEach(option => {
      const button = document.createElement('a');
      button.innerText = option;
      button.classList.add('option');
      button.classList.add('bluebtn');
      button.id = option;
      button.addEventListener('click', checkAnswer);
      optionsElement.appendChild(button);
  });
}


function checkAnswer(e) {
    overlayImg.setAttribute('src', game[i].image);
    if(game[i].correctAns === e.target.id) {
        score++;
        console.log("correct!! Score = ", score);

        //Turn on Success overlay
        maingame.style.display = 'none';
        overlayMessage.style.display = 'flex';
        overlayBg.style.display = 'block';
        message.textContent = 'Congratulations!';
        message.style.color = 'green';
        overlayText.textContent = 'Great job! You\'re an information design pro!';
        correctAnswer.textContent = `The correct LATCH principle is ${game[i].correctAns}.`;
        scoreLabel.textContent = `Score: ${score}`;
    } else {
        console.log("Wrong! Score = ", score);

        // Turn on failure overlay
        maingame.style.display = 'none';
        overlayMessage.style.display = 'flex';
        overlayBg.style.display = 'block';
        message.textContent = 'Wrong answer, please try again!';
        message.style.color = 'red';
        correctAnswer.textContent = `The correct LATCH principle is ${game[i].correctAns}.`;
        overlayText.textContent = 'Keep revising your information design concepts!';
        scoreLabel.textContent = `Score: ${score}`;
    }
}

function endGame() {
    console.log('GAME ENDED');

    //Turn on Game over overlay
    maingame.style.display = 'none';
    overlayMessage.style.display = 'flex';
    overlayImg.style.display = 'none';
    overlayBg.style.display = 'block';
    message.textContent = 'Game Over';
    message.style.color = '#f3b500';
    overlayText.textContent = `Good job! You have completed all the flashcards. Your final score is ${score}.`;
    correctAnswer.style.display = 'none';
    scoreLabel.textContent = `Score: ${score}`;

    // Remove the next button and replace it with a 'Play Again' button
    nextPage.style.display = 'none';

    const playAgainButton = document.createElement('a');
    playAgainButton.innerText = 'Play Again';
    playAgainButton.classList.add('bluebtn');
    playAgainButton.id = 'playAgain';
    playAgainButton.addEventListener('click', function() {
        location.reload();
    });
    overlayMessage.appendChild(playAgainButton);
}
