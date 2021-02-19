const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'YOU PASSEDD!!'
    startButton.classList.remove('hide')
    window.location.href = "index.html"
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Since Phase 3, what is the maximum number of people you can dine out with?',
    answers: [
      { text: '1', correct: false },
      { text: '3', correct: false },
      { text: '5', correct: false },
      { text: '8', correct: true },
    ]
  },
  {
    question: 'Which is one of the daily habits we should practice?',
    answers: [
      { text: 'Sanitize your hands frequently', correct: true },
      { text: 'Touch your face', correct: false },
      { text: 'Coughing at others', correct: false },
      { text: 'Ensure personal hygiene', correct: true },
    ]
  },
  {
    question: 'Should this pandemic be taken lightly?',
    answers: [
      { text: 'No', correct: true },
      { text: 'Absolutely not', correct: true },
      { text: 'Yes', correct: false },
      { text: 'Idk', correct: false },
    ]
  },
  {
    question: 'When should you wear a mask?',
    answers: [
      { text: 'During meals', correct: false },
      { text: 'When you r feeling unwell', correct: true },
      { text: 'In public places', correct: true },
      { text: 'When Sleeping', correct: false },
    ]
  },

  {
    question: 'YOu should always keep a safe distance between you and other groups in public.',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false },
    ]
  },
  {
    question: 'Which is one of the common symptom of the coronavirus',
    answers: [
      { text: 'Fever', correct: true },
      { text: 'Dry Cough', correct: true },
      { text: 'Lost of vision', correct: false },
      { text: 'Tiredness', correct: true },
    ]
  }
]