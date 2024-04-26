const quizData = [
  {
    question: "Who developed C# Programming Language?",
    a: "James Gosling",
    b: "Anders Hejlsberg",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b",
  },
  {
    question: "Which of the following statements is true about C#?",
    a: "C# is a low-level programming language.",
    b: "C# is a case-sensitive language.",
    c: "C# is platform-dependent.",
    d: "C# is primarily used for web development only.",
    correct: "b",
  },
  {
    question: "What does 'CLR' stand for in C#?",
    a: "Common Logic Runtime",
    b: "Common Language Runtime",
    c: "Common Language Regulation",
    d: "Common Language Rendering",
    correct: "b",
  },
  {
    question: "Which of the following is not a primitive data type in C#?",
    a: "int",
    b: "string",
    c: "float",
    d: "char",
    correct: "b",
  },
  {
    question: "In C#, which keyword is used to declare a constant?",
    a: "var",
    b: "final",
    c: "const",
    d: "let",
    correct: "c",
  },
  {
    question: "What is the default access modifier in a C# class?",
    a: "public",
    b: "private",
    c: "protected",
    d: "internal",
    correct: "d",
  },
  {
    question: "Which C# feature allows a class to have multiple methods with the same name but different parameters?",
    a: "Method Overloading",
    b: "Method Overriding",
    c: "Method Polymorphism",
    d: "Method Encapsulation",
    correct: "a",
  },
  {
    question: "Which of the following statements is true about the 'async' and 'await' keywords in C#?",
    a: "'async' is used to define asynchronous methods, and 'await' is used to wait for the result of an asynchronous operation.",
    b: "'async' is used to define synchronous methods, and 'await' is used to execute them asynchronously.",
    c: "'await' is used to define asynchronous methods, and 'async' is used to wait for the result of an asynchronous operation.",
    d: "Both 'async' and 'await' are used to define synchronous methods.",
    correct: "a",
  },
  {
    question: "Which of the following is NOT a valid C# variable name?",
    a: "myVariable",
    b: "My_variable",
    c: "_myVariable",
    d: "123Variable",
    correct: "d",
  },
  {
    question: "What does 'LINQ' stand for in C#?",
    a: "Language Integrated Query",
    b: "Linear Query",
    c: "Linked Query",
    d: "Logical Integrated Query",
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
  