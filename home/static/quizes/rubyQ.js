const quizData = [

  {
    question: "Who developed the Ruby programming language?",
    a: "Yukihiro Matsumoto",
    b: "Guido van Rossum",
    c: "Matz Ross",
    d: "Larry Wall",
    correct: "a",
  },
  {
    question: "What year was the Ruby programming language first released?",
    a: "1995",
    b: "2000",
    c: "1991",
    d: "2005",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a Ruby data type?",
    a: "Symbol",
    b: "Hash",
    c: "List",
    d: "String",
    correct: "c",
  },
  {
    question: "What is the convention for naming Ruby files?",
    a: ".ruby",
    b: ".r",
    c: ".rb",
    d: ".rubyfile",
    correct: "c",
  },
  {
    question: "What is the primary purpose of the RubyGem tool?",
    a: "Dependency management",
    b: "Code formatting",
    c: "Debugging",
    d: "Performance optimization",
    correct: "a",
  },
  {
    question: "Which of the following frameworks is commonly used for web development in Ruby?",
    a: "Express",
    b: "Django",
    c: "Rails",
    d: "Flask",
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
