// console.log("teste!!");
// QUESTIONS DATABASE
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
const startBtn = document.getElementById("start-btn"); //capturing the start game button

// ANSWER OPTIONS BUTTONS
const answerBtn = document.getElementsByClassName("answer-btn"); //capturing the answer options buttons

// QUESTION DIV
const question = document.getElementById("question"); //capturing the question div

// console.log(answerBtn);

// FUNCTIONS //

// START GAME BUTTON
// funcao a ser ativada quando clicar no 'start game' button
function startButton() {
  randomQuestion();
  // to call the funcion selectAnswer
  selectQuestion();
}

// ANSWERS OPTIONS BUTTONS
let round = 0;
// para ser ativado quando eu clicar no botao da answer
function selectQuestion() {
  // to insert the question inside the question div
  question.innerText = arrQuestions[round].question;
  // para percorrer a array-like answerBtn
  for (let i = 0; i < answerBtn.length; i++) {
    // to insert the answers inside each respective answer-btn
    answerBtn[i].innerText = arrQuestions[round].answers[i];
    answerBtn[i].addEventListener("click", () => {
      // eventlistener de click
      checkAnswer(arrQuestions[round].answers[i]);
    });
    // window.alert("To funfando caraleooo!")
  }
}

// FUNCTION TO PICK RANDOM QUESTIONS
function randomQuestion() {
  // to pick a random question from arrQuestions
  return arrQuestions.sort(() => Math.random() - Math.random()).slice();
  // arrQuestions[Math.floor(Math.random() * arrQuestions.length)]
}
// randomQuestion()
// console.log(randomQuestion())

// FUNCION TO CHECK IF ANSWER IS CORRECT OR NOT
function checkAnswer(answer) {
  console.log(answer);
  if (arrQuestions[round].correctAnswer === answer) {
    console.log("Acertou");
    round++;
    //INSERT IF HERE
    selectQuestion();
    // randomQuestion(); //criar funcao para passar para proxima pergunta, se a resposta for correta.
  } else {
    console.log("Errou!");
    // location.reload(); // criar funcao para perder 1 vida de 3, se areposta for errada?
  }
}

// FUNCTION TO BE CALLED WHEN THE ANSWER IS CORRECT
function nextQuestion() {}

// FUNCTION TO BE CALLED WHEN THE ANSWER IS INCORRECT
function oneLessLife() {}

// EVENT LISTENERS //

// START GAME BUTTON
startBtn.addEventListener("click", () => {
  //event listener click que aciona a funcao startButton
  startButton();
  startBtn.style.display = "none"; // to make START GAME button disappear
});

// answerBtn.addEventListener("click", () => { //it's not working, because getElementByClassName returns an array-like object
//   selectAnswer();
// });

// QUESTIONS //

// 1. COMO FAZER UMA PERGUNTA NAO SE REPETIR NA RANDOMQUESTION FUNCTION?
// 2. COMO FAZER O LOOP CHECAR SE A PERGUNTA ESTA CORRETA OU NAO?

//FAZER DEPOIS DO HELP COM A KAREN 14/06 //

// FAZER FUNCAO END GAME
// IF ROUND > 4
// CHAMAR FUNCAO END GAME

// LESS LIFE FUNCTION
// VARIAVEL LIFE CRIADA NO SCOPO global COMO O ROUND
