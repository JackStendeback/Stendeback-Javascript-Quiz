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
        question: "The major components of the web browser are",
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

// Quiz logic, added styling to the quiz using Bootstrap
const quizContainer = document.getElementById("quiz-container");
// quizContainer.classList.add("container");

const questionContainer = document.getElementById("question-container");
// questionContainer.classList.add("card", "p-4");

const timerDisplay = document.getElementById("timer-display");
// timerDisplay.classList.add("badge", "badge-primary");

const submitButton = document.getElementById("submit-btn");
// submitButton.classList.add("btn", "btn-primary");

const startButton = document.getElementById("start-btn");
// startButton.classList.add("btn", "btn-primary");


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

  // Render the question, added styling using bootstrap.
  const questionElement = document.createElement("h2");
  questionElement.classList.add("card-title", "font-weight-bold", "mb-4");
  questionElement.textContent = currentQuestion.question;
  questionContainer.appendChild(questionElement);

  // Render the options, added styling using bootstrap.
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const option = currentQuestion.options[i];
    const optionElement = document.createElement("button");
    optionElement.classList.add("btn", "btn-light", "btn-block", "mb-2", "text-dark");
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

    quizContainer.classList.add("container");
    questionContainer.classList.add("card", "p-4", "bg-light", "text-dark");
    timerDisplay.classList.add("badge", "badge-primary");
    submitButton.classList.add("btn", "btn-primary"); 
    startButton.classList.add("btn", "btn-primary");
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

    const options = questionContainer.getElementsByTagName("button");
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  
    if (selectedIndex === answerIndex) {
      score++;
      options[selectedIndex].style.backgroundColor = "green";
    } else {
      timeLeft -= 5; // Subtract 5 seconds for incorrect answers
      options[selectedIndex].style.backgroundColor = "red";
      options[answerIndex].style.backgroundColor = "green";
    }

    // Show the submit button
    submitButton.classList.remove("hidden");
}


//End the quiz and display the score
function endQuiz() {
    questionContainer.style.display = "none";
    timerDisplay.style.display = "none";
    submitButton.style.display = "none";
  
    const scoreElement = document.createElement("h2");
    scoreElement.textContent = `Your score is ${score}/${quizData.length}`;
    quizContainer.appendChild(scoreElement);
  
    // Create input field for initials
    const initialsInput = document.createElement("input");
    initialsInput.placeholder = "Enter your initials";
    initialsInput.classList.add("form-control", "my-3");
    quizContainer.appendChild(initialsInput);
  
    // Create submit button for saving initials and score
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("btn", "btn-primary");
    quizContainer.appendChild(saveButton);
  
    // Event listener for save button
    saveButton.addEventListener("click", function () {
      const initials = initialsInput.value;
      saveScore(initials, score);
      showHighScores();
    });
  }

// High score section
function showHighScores() {
    const highScoresContainer = document.getElementById("high-scores-container");
    const highScoresList = document.getElementById("high-scores-list");
  
    // Retrieve scores from local storage
    const scores = JSON.parse(localStorage.getItem("quizScores"));
  
    // Clear existing scores from the list
    highScoresList.innerHTML = "";
  
    // If there are no scores, display a message
    if (!scores || scores.length === 0) {
      const messageItem = document.createElement("li");
      messageItem.textContent = "No high scores yet";
      messageItem.classList.add("list-group-item");
      highScoresList.appendChild(messageItem);
      return;
    }

    scores.forEach(function(score, index) {
        const scoreItem = document.createElement("li");
        scoreItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
        scoreItem.classList.add("list-group-item");
        highScoresList.appendChild(scoreItem);
      });
    
      highScoresContainer.style.display = "block";
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

function saveScore(initials, score) {
    // Retrieve existing scores from local storage or initialize an empty array
    const existingScores = JSON.parse(localStorage.getItem("quizScores")) || [];
  
    // Create a new score object with initials and score values
    const newScore = { initials, score };
  
    // Add the new score to the existing scores array
    existingScores.push(newScore);
  
    // Sort the scores array in descending order based on score
    existingScores.sort((a, b) => b.score - a.score);
  
    // Store the updated scores array back in local storage
    localStorage.setItem("quizScores", JSON.stringify(existingScores));
  }
  

// Event listener to start the quiz
startButton.addEventListener("click", startQuiz);