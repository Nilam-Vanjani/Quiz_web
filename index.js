const questions = [
    {
      q: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Links"],
      answer: 0
    },
    {
      q: "Which symbol is used for comments in JavaScript?",
      options: ["<!-- -->", "//", "/* */"],
      answer: 1
    },
    {
      q: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
      answer: 1
    },
    {
      q: "Which HTML tag is used to link JavaScript?",
      options: ["<js>", "<script>", "<javascript>"],
      answer: 1
    },
    {
      q: "What is the output of 'typeof null' in JavaScript?",
      options: ["object", "null", "undefined"],
      answer: 0
    },
    {
      q: "Which of these is a JavaScript framework?",
      options: ["Laravel", "Django", "React"],
      answer: 2
    },
    {
      q: "What is the default display of a <div> element?",
      options: ["inline", "block", "inline-block"],
      answer: 1
    },
    {
      q: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model"],
      answer: 0
    },
    {
      q: "Which method converts JSON to a JavaScript object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()"],
      answer: 0
    },
    {
      q: "How do you declare a constant in JavaScript?",
      options: ["let", "var", "const"],
      answer: 2
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  function startQuiz() {
    document.querySelector('.start').style.display = 'none';
    document.querySelector('.quiz').style.display = 'block';
    loadQuestion();
  }

  function loadQuestion() {
    const question = questions[currentQuestion];
    document.querySelector('.question').innerText = question.q;
    const optionsContainer = document.querySelector('.options');
    optionsContainer.innerHTML = '';
    question.options.forEach((opt, i) => {
      const btn = document.createElement('div');
      btn.className = 'option';
      btn.innerText = opt;
      btn.onclick = () => checkAnswer(i);
      optionsContainer.appendChild(btn);
    });
  }

  function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    document.querySelector('.quiz').style.display = 'none';
    document.querySelector('.result').style.display = 'block';
    document.getElementById('score').innerText = score;
  }

  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.querySelector('.result').style.display = 'none';
    document.querySelector('.start').style.display = 'block';
  }