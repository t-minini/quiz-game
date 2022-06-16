// console.log("teste!!");

// QUESTIONS DATABASE //
const arrQuestions = [
  {
    question: "What would be the result of 3+2+”7″?",
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
// QUESTION <DIV>
const question = document.getElementById("question");

// FUNCTIONS //

// FUNCTION TO START THE GAME
function startButton() {
  startBtn.classList.add("hide");
  questionBox.classList.remove("hide");
  randomQuestion();
  addEvents();
  // to call the function selectAnswer
  console.log("startButton");
  selectQuestion();
}
// FUNCTION TO ADD CLICK EVENT TO EACH ANSWER BUTTON
function addEvents() {
  for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].addEventListener("click", () => {
      checkAnswer(arrQuestions[round].answers[i]);
    });
  }
}
// FUNCTION TO ADD ANSWERS TO THE OPTIONS BUTTONS
let round = 0;
function selectQuestion() {
  console.log("selectQuestion");
  // to insert a question inside the question <div>
  question.innerText = arrQuestions[round].question;
  for (let i = 0; i < answerBtn.length; i++) {
    answerBtn[i].innerText = arrQuestions[round].answers[i];
  }
  console.log(answerBtn);
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
  console.log(answer);
  console.log(arrQuestions[round].correctAnswer);
  if (arrQuestions[round].correctAnswer === answer) {
    console.log("Acertou");
    round++;
    if (round >= arrQuestions.length) {
      return location.reload(youWin()); // end the game, display window "You Win" and reload the page.
    }
    shuffleAnswers();
    selectQuestion();
  } else {
    totalLife--;
    console.log(totalLife);
    if (totalLife === 0) {
      console.log("Errou!");
      return location.reload(gameOver());
    }
  }
}
//FUNCTION TO BE CALLED WHEN THE GAME ENDS
function gameOver() {
  window.alert("Game Over"); // HOW TO DISPLAY AN IMAGE INSTEAD?
}
//FUNCTION TO BE CALLED WHEN YOU WIN
function youWin() {
  window.alert("You Win"); // HOW TO DISPLAY AN IMAGE INSTEAD?
}


// EVENT LISTENERS //

// START GAME BUTTON
startBtn.addEventListener("click", () => {
  //event listener click que aciona a funcao startButton
  startButton();
  // startBtn.style.display = "none"; // to make START GAME button disappear
});

// QUESTIONS //

// 1. COMO FAZER O BOTAO PARAR DE FICAR BRANCO, VOLTAR A COR AZUL QUANDO NAO CLICADO? "PESQUISAR BOTTAO HOVER"
// 3. COMO FAZER QUE, AO INVEZ DE ABRIR UMA JANELA, APARECER UMA IMAGEN NO GAME OVER E NO WIN? "DONE"
