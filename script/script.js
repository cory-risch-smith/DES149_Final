//To-Do: 
// 1. Debug Score
// 2. Fix weird styling
// 3. Populate game array objects with Kinu's stuff
// 4. Style Overlay

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


const game = [
    {image: "https://picsum.photos/300/200",
    question: "What do you want to do today?",
    options: ["location", "alphabet", "time", "category", "hierarchy"],
    correctAns: "location"}, 

    {image: "https://picsum.photos/300/200",
    question: "This is question 2",
    options: ["location and hierarchy", "alphabet", "time", "category", "just hierarchy"],
    correctAns: "alphabet"}, 

    {image: "https://picsum.photos/300/200",
    question: "How many elephants are in this pic?",
    options: ["location and hierarchy", "alphabet", "time", "category", "just hierarchy"],
    correctAns: "time"}, 
]

var score = 0;
var i = 0;
pageDisplay(i);
playGame();
overlayMessage.style.display = 'none';

function playGame(){
    //Question 1
    var options = document.getElementsByClassName('option');
    
    for (let option of options) {
        option.addEventListener('click', function() {
            if (option.textContent === game[i].correctAns){
                //Turn on Success overlay
                maingame.style.display = 'none'; 
                overlayMessage.style.display = 'block';
                message.textContent = 'Congratulations!';
                message.style.color = 'green';
                overlayText.textContent = 'You are great! No studying for you!';
                correctAnswer.textContent = `The correct LATCH principle is ${game[i].correctAns}.`
                score++;
                scoreLabel.textContent = `Score: ${score}`;
            } else {
                // Turn on failure overlay
                maingame.style.display = 'none';
                overlayMessage.style.display = 'block';
                message.textContent = 'You suck!';
                message.style.color = 'red';
                correctAnswer.textContent = `The correct LATCH principle is ${game[i].correctAns}.`
                overlayText.textContent = 'You are terrible. Please go study more.';
            }
        });
    }

    // when proceed is clicked, increment i and display the new page.
    nextPage.addEventListener('click', function() {
        overlayMessage.style.display = 'none';
        maingame.style.display = 'flex';
        if (i == game.length - 1) {
            return;
            //Where we call end of game page. 
        }
        i++;
        pageDisplay(i);
        playGame();
    });

}

function pageDisplay(pageIndex) {
    gameImage.setAttribute("src", game[pageIndex].image);
    question.textContent = game[pageIndex].question;
    optionA.textContent = game[pageIndex].options[0];
    optionB.textContent = game[pageIndex].options[1];
    optionC.textContent = game[pageIndex].options[2];
    optionD.textContent = game[pageIndex].options[3];
    optionE.textContent = game[pageIndex].options[4];
}

