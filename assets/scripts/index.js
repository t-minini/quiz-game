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
      "/* comment here */",
      "// comment here",
      "/ comment here /",
      "<!-- comment here -->",
    ],
    correctAnswer: "<!-- comment here -->",
  },
  {
    question: "What is the data type of variables in JavaScript?",
    answers: ["String", "Object", "Boolean", "Undefined"],
    correctAnswer: "Object",
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
  // to call the funcion selectAnswer
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
// FUNCION TO CHECK IF ANSWER IS CORRECT OR NOT
function checkAnswer(answer) {
  console.log(answer);
  console.log(arrQuestions[round].correctAnswer);
  if (arrQuestions[round].correctAnswer === answer) {
    console.log("Acertou");
    round++;
    if (round >= arrQuestions.length) {
      return location.reload(youWin()); // end the game, display window "You Win" and reload the page.
    }
    selectQuestion();
  } else {
    console.log("Errou!");
    return location.reload(gameOver()); // end the game, display window "GameOver" and reload the page.
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

// FUNCTION TO BE CALLED WHEN THE ANSWER IS INCORRECT
// let errors = 0;
// function oneLessLife() {
//   if (errors <= 3) {
//     function() // criar funcao para checar vidas
//   } else (
//     gameOver()  // criar funcao para quando o jogador errar 3 x.
//   )
// }

// EVENT LISTENERS //

// START GAME BUTTON
startBtn.addEventListener("click", () => {
  //event listener click que aciona a funcao startButton
  startButton();
  // startBtn.style.display = "none"; // to make START GAME button disappear
});

// QUESTIONS //

// 1. COMO FAZER O BOTAO PARAR DE FICAR BRANCO, VOLTAR A COR AZUL QUANDO NAO CLICADO?
// 2. COMO FAZER O START GAME BOTTAO DESAPARECER TOTALMENTE? TEV A VER COM O FLEXBOX EU ACHO.
// 3. COMO FAZER QUE, AO INVEZ DE ABRIR UMA JANELA, APARECER UMA IMAGEN NO GAME OVER E NO WIN?

//FAZER DEPOIS DO HELP COM A KAREN 15/06 //

// FAZER FUNCAO END GAME
// IF ROUND > 4
// CHAMAR FUNCAO END GAME

// LESS LIFE FUNCTION
// VARIAVEL LIFE CRIADA NO SCOPO global COMO O ROUND
