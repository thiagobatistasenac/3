const quizData = [ /* seus dados do quiz aqui */ ];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const question = quizData[currentQuestion];
  document.getElementById('question-text').textContent = question.question;
  
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = quizData[currentQuestion].answer;
  if (selectedIndex === correctIndex) {
    score++;
    alert("Correto!");
  } else {
    alert("Errado! A resposta correta é: " + quizData[currentQuestion].options[correctIndex]);
  }
  
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    alert(`Quiz completo! Sua pontuação: ${score}/${quizData.length}`);
  }
}

// Inicia o quiz
window.onload = startQuiz;