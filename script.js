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

// Select the answer
function selectAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const answerIndex = currentQuestion.answerIndex;

    if (selectedIndex === answerIndex) {
        score++;
        // Color coated feedback for correct answer
        questionContainer.children[selectedIndex + 1].style.backgroundColor = "green";
    } else {
        // Color coated feedback for incorrect answer
        questionContainer.children[selectedIndex + 1].style.backgroundColor = "red";
        // Color coated feedback for correct answer
        questionContainer.children[answerIndex + 1].style.backgroundColor = "green";
    }

    // Disable further selection of options
    for (let i = 1; i < questionContainer.children.length; i++) {
        questionContainer.children[i].disabled = true;
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