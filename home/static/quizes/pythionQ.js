const quizData = [
    {
      question: "Who developed Python Programming Language?",
      a: "Wick van Rossum",
      b: "Rasmus Lerdorf",
      c: "Guido van Rossum",
      d: "Niene Stom",
      correct: "c",
    },
    {
      question: "Which type of Programming does Python support?",
      a: "Object-oriented programming",
      b: "Structured programming",
      c: "Functional programming",
      d: "All of the mentioned",
      correct: "d",
    },
    {
      question: "Is Python case sensitive when dealing with identifiers?",
      a: "No",
      b: "Yes",
      c: "Machine dependent",
      d: "None of the mentioned",
      correct: "a",
    },
    {
      question:
        "Which of the following is the correct extension of the Python file?",
      a: " .python",
      b: " .pl",
      c: " .py",
      d: ".p",
      correct: "c",
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
