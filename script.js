// Quiz Data
const quizData = [
    {
        question: "Question 1",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 2",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 3",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 4",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 5",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 6",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 7",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 8",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 9",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Question 10",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answerIndex: 0 // Index of the correct answer
    },
];

// Quiz logic
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const timerDisplay = document.getElementById("timer-display");
const submitButton = document.getElementById("submit-btn");
const startButton = document.getElementById("start-btn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60; // Total time for the quiz measured in seconds

// Rendering current questions and answers
function renderQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

  // Clear the previous question and options
  questionContainer.innerHTML = "";

  // Render the question
  const questionElement = document.createElement("h2");
  questionElement.textContent = currentQuestion.question;
  questionContainer.appendChild(questionElement);

  // Render the options
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = currentQuestion.options[i];
    const optionElement = document.createElement("button");
    optionElement.textContent = option;
    optionElement.addEventListener("click", function () {
      selectAnswer(i);
    });
    questionContainer.appendChild(optionElement);
  }
}

// Start the quiz
function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    renderQuestion();
    startTimer();
}

// Start timer countdown
function startTimer() {
    const timer = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// Select the answer
function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const answerIndex = currentQuestion.answerIndex;

    if (selectedIndex === answerIndex) {
        score++;
      } else {
        timeLeft -= 5; // Subtract 5 seconds for incorrect answer
      }
    
      // Disable further selection of options
      const options = questionContainer.getElementsByTagName("button");
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
      }

    // Show the submit button
    submitButton.style.display = "block";
}


//End the quiz and display the score
function endQuiz() {
    //Put scoring logic here
    questionContainer.style.display = "none";
    timerDisplay.style.display = "none";
    submitButton.style.display = "none";

    //Display score
    const scoreElement = document.createElement("h2");
    scoreElement.textContent = `Your score is ${score}/${quizData.length}`;
    quizContainer.appendChild(scoreElement);
}

//Event listener for submit button
submitButton.addEventListener("click", function () {
if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    submitButton.style.display = "none";
} else {
    endQuiz();
}
});

// Event listener to start the quiz
startButton.addEventListener("click", startQuiz);