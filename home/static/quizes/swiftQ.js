const quizData = [
    {
      question: "What year was the Swift programming language first introduced by Apple?",
      a: "2010",
      b: "2012",
      c: "2014",
      d: "2016",
      correct: "c",
    },
    {
      question: "Who is the primary developer of the Swift programming language?",
      a: "Chris Lattner",
      b: "Guido van Rossum",
      c: "Brendan Eich",
      d: "Anders Hejlsberg",
      correct: "a",
    },
    {
      question: "What is the primary operating system targeted by Swift?",
      a: "Windows",
      b: "Linux",
      c: "macOS",
      d: "Android",
      correct: "c",
    },
    {
      question: "What keyword is used to declare a constant in Swift?",
      a: "let",
      b: "const",
      c: "var",
      d: "final",
      correct: "a",
    },
    {
      question: "Which Swift feature provides type safety and eliminates the need for manual memory management?",
      a: "Optionals",
      b: "Automatic Reference Counting (ARC)",
      c: "Generics",
      d: "Structs",
      correct: "b",
    },
    {
      question: "What is the name of the integrated development environment (IDE) commonly used for Swift development?",
      a: "Xcode",
      b: "Eclipse",
      c: "Visual Studio Code",
      d: "Android Studio",
      correct: "a",
    },
    {
      question: "Which of the following statements is true about Swift?",
      a: "Swift is a statically-typed language.",
      b: "Swift is based on the Java programming language.",
      c: "Swift is primarily used for web development.",
      d: "Swift is developed by Google.",
      correct: "a",
    },
    {
      question: "Which Swift feature allows you to define a group of related functionalities that can be reused across your codebase?",
      a: "Extensions",
      b: "Protocols",
      c: "Enumerations",
      d: "Classes",
      correct: "b",
    },
    {
      question: "In Swift, what does the keyword 'guard' do?",
      a: "Defines a loop",
      b: "Unwraps an optional",
      c: "Declares a variable",
      d: "Performs an early exit",
      correct: "d",
    },
    {
      question: "Which type of collection in Swift is unordered and does not allow duplicate elements?",
      a: "Array",
      b: "Set",
      c: "Dictionary",
      d: "Tuple",
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
