
// QUESTIONS DATABASE //
const arrQuestions = [
  {
    question: "What would be the result of 3 + 2 + ”7″?",
    answers: [12, 35, 57, "NaN"],
    correctAnswer: 57,
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Amazon", "Netscape", "Microsoft", "Oracle"],
    correctAnswer: "Netscape",
  },
  {
    question: "Which symbol is used for comments in HTML?",
    answers: [
      "/* your comment here */",
      "// your comment here",
      "/ your comment here /",
      "<!-- your comment here -->",
    ],
    correctAnswer: "<!-- your comment here -->",
  },
  {
    question: "What is the data type of variables in JavaScript?",
    answers: ["String", "Object", "Boolean", "Undefined"],
    correctAnswer: "Object",
  },
  {
    question: "Choose the correct HTML tag for the largest heading.",
    answers: ["<heading>", "<h6>", "<head>", "<h1>"],
    correctAnswer: "<h1>",
  },
  {
    question: "How can you make a numbered list?",
    answers: ["<ol>", "<ul>", "<dl>", "<list>"],
    correctAnswer: "<ol>",
  },
  {
    question: "What does CSS stands for?",
    answers: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<js>", "<script>", "<javascript>", "<scripting>"],
    correctAnswer: "<script>",
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFunction",
      "function() = myFunction",
    ],
    correctAnswer: "function myFunction()",
  },
];

// CAPTURING ELEMENTS FROM HTML //

// START GAME BUTTON
const startBtn = document.getElementById("start-game");
// QUESTION + ANSWERS BOX
const questionBox = document.getElementById("question-box");
// ANSWER OPTIONS BUTTONS
const answerBtn = document.getElementsByClassName("answer-btn");
// GAME LOGO <DIV>
const gameLogo = document.getElementById("game-logo-start");
// QUESTION <DIV>
const question = document.getElementById("question");
// YOU WIN IMG
const youWinImg = document.getElementById("you-win-img");
// GAME OVER IMG
const gameOverImg = document.getElementById("game-over-img");
// RESTART BUTTON
const restartBtn = document.getElementById("restart-btn");
// RESTART BUTTON OVER
const restartBtnOver = document.getElementById("restart-btn-over");
// GAME SOUNDS
const gameOverSound = new Audio("./assets/sounds/game-over-sound.mp3");
const youWinSound = new Audio("./assets/sounds/you-win-sound.mp3");


// FUNCTIONS //

// FUNCTION TO START THE GAME
function startButton() {
  startBtn.classList.add("hide");
  questionBox.classList.remove("hide");
  randomQuestion();
  addEvents();
  selectQuestion();
}
// FUNCTION TO ADD CLICK EVENT TO EACH ANSWER BUTTON
function addEvents() {
  for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener("click", () => {
      checkAnswer(arrQuestions[round].answers[i]);
      answerBtn[i].style.backgroundColor = "#6495ed";
      answerBtn[i].style.border = "none";
      answerBtn[i].style.boxShadow = "5px 5px rgb(193, 192, 192)";
      answerBtn[i].style.color = "white";
    });
  }
}
// FUNCTION TO ADD ANSWERS TO THE OPTIONS BUTTONS
let round = 0;
function selectQuestion() {
  question.innerText = arrQuestions[round].question;
  for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].innerText = arrQuestions[round].answers[i];
  }
}
// FUNCTION TO PICK RANDOM QUESTIONS FROM arrQuestions
function randomQuestion() {
  return arrQuestions.sort(() => Math.random() - Math.random()).slice();
}
// FUNCTION TO SHUFFLE ANSWERS
function shuffleAnswers() {
  return arrQuestions[round].answers
    .sort(() => Math.random() - Math.random())
    .slice();
}
// FUNCION TO CHECK IF ANSWER IS CORRECT OR NOT
let totalLife = 3;
function checkAnswer(answer) {
  if (arrQuestions[round].correctAnswer === answer) {
    round++;
    if (round >= arrQuestions.length) {
      return youWin();
    }
    shuffleAnswers();
    selectQuestion();
  } else {
    totalLife--;
    if (totalLife === 0) {
      return gameOver();
    }
  }
}
//FUNCTION TO BE CALLED WHEN THE GAME ENDS
function gameOver() {
  gameOverSound.play();
  gameOverImg.classList.remove("hide");
  restartBtnOver.classList.remove("hide");
  questionBox.classList.add("hide");
  gameLogo.classList.add("hide");
  restartBtnOver.addEventListener("click", () => {
    restart();
  });
}
//FUNCTION TO BE CALLED WHEN YOU WIN
function youWin() {
  youWinImg.classList.remove("hide");
  restartBtn.classList.remove("hide");
  questionBox.classList.add("hide");
  gameLogo.classList.add("hide");
  restartBtn.addEventListener("click", () => {
    restart();
  });
  youWinSound.play();
}
// FUNCTION TO RESTART GAME
function restart() {
  location.reload();
}

// EVENT LISTENERS //

// START GAME BUTTON
startBtn.addEventListener("click", () => {
  startButton();
});