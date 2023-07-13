// Quiz Data
const quizData = [
    {
        question: "The latest HTML standard is",
        options: ["HTML 4", "HTML 5", "CSS 2", "CSS 3"],
        answerIndex: 1 // Index of the correct answer
    },

    {
        question: "What are shared on the Internet and are called as Web pages?",
        options: ["Programs", "Cables", "Hypertext Documents", "None"],
        answerIndex: 2 // Index of the correct answer
    },

    {
        question: "The Major components of the Web browser are",
        options: ["Menu Bar", "Toolbar", "Location", "All of the above"],
        answerIndex: 3 // Index of the correct answer
    },

    {
        question: "Javascript is an _______ language?",
        options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        options: ["var", "let", "Both A & B", "None of the above"],
        answerIndex: 2 // Index of the correct answer
    },

    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        options: ["getElementById", "getElementsByClassName", "Both A & B", "None of the above"],
        answerIndex: 2 // Index of the correct answer
    },

    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        options: ["document.write()", "console.log()", "window.alert()", "All of the above"],
        answerIndex: 3 // Index of the correct answer
    },

    {
        question: "How can a datatype be declared to be a constant type?",
        options: ["const", "var", "let", "constant"],
        answerIndex: 0 // Index of the correct answer
    },

    {
        question: "What does the Javascript “debugger” statement do?",
        options: ["It will debug all the errors in the program at runtime", "It acts as a breakpoint in a program", "It will debug errors in the current statement, if any.", "All of the above"],
        answerIndex: 1 // Index of the correct answer
    },

    {
        question: "Which of the following is not a Javascript framework?",
        options: ["Node", "Vue", "React", "Cassandra"],
        answerIndex: 3 // Index of the correct answer
    },
];

// Quiz logic
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const timerDisplay = document.getElementById("timer-display");
const submitButton = document.getElementById("submit-btn");
const startButton = document.getElementById("start-btn");
submitButton.classList.add("hidden");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60; // Total time for the quiz measured in seconds

function showSubmitButton() {
    submitButton.classList.remove("hidden"); // Show the submit button
}

function hideSubmitButton() {
    submitButton.classList.add("hidden"); // Hide the submit button
}


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

function showSubmitButton() {
    submitButton.classList.remove("hidden");
  }

// Start the quiz
function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    hideSubmitButton();
    showSubmitButton();
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
        questionContainer.children[selectedIndex + 1].classList.add("btn-success");
      } else {
        timeLeft -= 5; // Subtract 5 seconds for incorrect answers
        questionContainer.children[selectedIndex + 1].classList.add("btn-danger");
        questionContainer.children[answerIndex + 1].classList.add("btn-success");
      }  
      // Disable further selection of options
      const options = questionContainer.getElementsByTagName("button");
      for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
      }

    // Show the submit button
    submitButton.classList.remove("hidden");
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

    //Add display for initials
}

//Event listener for submit button
submitButton.addEventListener("click", function () {
if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
    submitButton.classList.add("hidden");
} else {
    endQuiz();
}
});

// Event listener to start the quiz
startButton.addEventListener("click", startQuiz);