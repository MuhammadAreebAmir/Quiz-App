const quizData = [
  {
    question: "What is F# primarily used for?",
    a: "Web development",
    b: "Data science",
    c: "Mobile app development",
    d: "Game development",
    correct: "b",
  },
  {
    question: "Who developed the F# programming language?",
    a: "Anders Hejlsberg",
    b: "Simon Peyton Jones",
    c: "Don Syme",
    d: "Martin Odersky",
    correct: "c",
  },
  {
    question: "In F#, what keyword is used to define a function?",
    a: "function",
    b: "def",
    c: "fun",
    d: "fn",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a feature of F#?",
    a: "Pattern matching",
    b: "Type inference",
    c: "Garbage collection",
    d: "Immutability",
    correct: "c",
  },
  {
    question: "What is the file extension for F# source files?",
    a: ".fs",
    b: ".f#",
    c: ".fsharp",
    d: ".f",
    correct: "a",
  },
  {
    question: "Which of the following is a functional programming paradigm?",
    a: "Java",
    b: "C#",
    c: "F#",
    d: "Python",
    correct: "c",
  },
  {
    question: "What is the F# Interactive tool used for?",
    a: "Unit testing",
    b: "Code documentation",
    c: "Interactive programming",
    d: "Database management",
    correct: "c",
  },
  {
    question: "What framework is commonly used for web development in F#?",
    a: "ASP.NET",
    b: "Ruby on Rails",
    c: "Django",
    d: "Express.js",
    correct: "a",
  },
  {
    question: "Which of the following is NOT a benefit of using F#?",
    a: "Conciseness",
    b: "Interoperability with Java",
    c: "Type safety",
    d: "Scalability",
    correct: "b",
  },
  {
    question: "What is the package manager for F#?",
    a: "NuGet",
    b: "npm",
    c: "Maven",
    d: "Cargo",
    correct: "a",
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
