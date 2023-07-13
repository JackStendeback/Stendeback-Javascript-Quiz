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

}

// Start the quiz
function startQuiz() {
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



//End the quiz and display the score
function endQuiz() {
    //Put scoring logic here

    //Display score
    quizContainer.innerHTML = `
    <h2>Your score is ${score}</h2>
    `;
}

//Event listener for submit button
submitButton.addEventListener("click", function () {
// Check the selected answer
// If correct, increment score


//Next question / end of quiz
if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
} else {
    endQuiz();
}
});

// Event listener to start the quiz
document.getElementById("start-btn").addEventListener("click", startQuiz);