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

// CAPTURING ELEMENTS FROM HTML
const question = document.getElementById("question");
const answerBtn = document.getElementById("answer-opt").getElementsByClassName("answer-btn"); // acho que deu ruim
const startBtn = document.getElementById("start-btn");
console.log(answerBtn);

// DISPLAY THE QUESTIONS DFATABASE ON THE SCREEN

// FUNCTIONS
function startButton() {
  question.innerText = arrQuestions[0].question;
  answerBtn.innerText = arrQuestions[0].answers; //queria mudar o texto de cada button com sua respectiva resposta.

  //   console.log('Started')
  //   selectAnswer();

  //criar o for loop, criar os botoes com o eveNT listeNer + FUNCAO DE CHECK
}
// criar uma funcao de check para checar as respostas. dentro do eevent listener dos botones das perguntas.

function selectAnswer() {
  for (let i = 0; i < arrQuestions.answers.length; i++) {
    if (answers[i] === correctAnswer) {
        return nextQuestion() //criar funcao para passar para proxima pergunta?
    } else {
        return oneLessLife () // criar funcao para perder 1 vida de 3.
  }
  //console.log
}
}

// EVENT LISTENERS
startBtn.addEventListener("click", () => {
  startButton();
  startBtn.style.display = "none"; // to make START GAME button disappear
});
// answerBtn.addEventListener("click", () => { //it's not working, because getElementByClassName returns an array-like object
//   selectAnswer();
// });
