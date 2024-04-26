const quizData = [
    {
      question: "What company developed the Go programming language?",
      a: "Google",
      b: "Apple",
      c: "Microsoft",
      d: "Amazon",
      correct: "a",
    },
    {
      question: "In which year was the Go programming language first released?",
      a: "2007",
      b: "2009",
      c: "2011",
      d: "2013",
      correct: "b",
    },
    {
      question: "Which of the following is NOT a basic type in Go?",
      a: "int",
      b: "float64",
      c: "bool",
      d: "string[]",
      correct: "d",
    },
    {
      question: "What is the convention for naming Go files?",
      a: ".go",
      b: ".golang",
      c: ".gofile",
      d: ".g",
      correct: "a",
    },
    {
      question: "What is the primary purpose of the 'go' command?",
      a: "Dependency management",
      b: "Code formatting",
      c: "Build and run Go programs",
      d: "Performance optimization",
      correct: "c",
    },
    {
      question: "Which of the following frameworks is NOT commonly used for web development in Go?",
      a: "Echo",
      b: "Gin",
      c: "Beego",
      d: "Django",
      correct: "d",
    },
    {
      question: "What keyword is used to declare variables in Go?",
      a: "var",
      b: "let",
      c: "const",
      d: "def",
      correct: "a",
    },
    {
      question: "Which of the following is a correct way to define a function in Go?",
      a: "func myFunction() {}",
      b: "function myFunction() {}",
      c: "def myFunction() {}",
      d: "func myFunction {}",
      correct: "a",
    },
    {
      question: "What is the zero value of a boolean type in Go?",
      a: "0",
      b: "nil",
      c: "false",
      d: "true",
      correct: "c",
    },
    {
      question: "Which of the following operators is used for pointer dereferencing in Go?",
      a: "&",
      b: "*",
      c: "->",
      d: ".",
      correct: "b",
    },
];

  
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Pick 5 random questions from the array
const selectedQuizData = quizData.sort(() => 0.5 - Math.random()).slice(0, 10);

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = selectedQuizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === selectedQuizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < selectedQuizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
           <h3>You answered ${score}/${selectedQuizData.length} questions correctly</h3>
           <button id="submit" onclick="location.reload()">Reload</button>
           `;
    }
  }
});
