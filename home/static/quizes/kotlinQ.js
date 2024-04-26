const quizData = [

    {
      question: "Who is the creator of the Kotlin programming language?",
      a: "JetBrains",
      b: "Google",
      c: "Microsoft",
      d: "Apple",
      correct: "a",
    },
    {
      question: "In which year was Kotlin first released?",
      a: "2010",
      b: "2011",
      c: "2012",
      d: "2013",
      correct: "b",
    },
    {
      question: "Which of the following is NOT a feature of Kotlin?",
      a: "Null Safety",
      b: "Coroutines",
      c: "Generics",
      d: "Pointers",
      correct: "d",
    },
    {
      question: "What is the preferred build tool for Kotlin projects?",
      a: "Maven",
      b: "Ant",
      c: "Gradle",
      d: "Make",
      correct: "c",
    },
    {
      question: "Which platform is officially supported for Kotlin development?",
      a: "Android",
      b: "iOS",
      c: "Windows",
      d: "Linux",
      correct: "a",
    },
    {
      question: "Which programming paradigm is Kotlin primarily associated with?",
      a: "Procedural",
      b: "Functional",
      c: "Object-Oriented",
      d: "Logic",
      correct: "c",
    },
    {
      question: "What is the default visibility modifier in Kotlin?",
      a: "public",
      b: "private",
      c: "protected",
      d: "internal",
      correct: "d",
    },
    {
      question: "Which keyword is used to declare a variable in Kotlin?",
      a: "let",
      b: "var",
      c: "val",
      d: "const",
      correct: "c",
    },
    {
      question: "What is the name of the Kotlin standard library package?",
      a: "kotlin.core",
      b: "kotlin.base",
      c: "kotlin.std",
      d: "kotlin.stdlib",
      correct: "d",
    },
    {
      question: "Which IDE provides first-class support for Kotlin development?",
      a: "Eclipse",
      b: "NetBeans",
      c: "IntelliJ IDEA",
      d: "Visual Studio Code",
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
