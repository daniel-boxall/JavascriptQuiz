let timerDiv = document.querySelector("#time")
let startScreen = document.querySelector("#start-screen");
const question = document.getElementById("questions");
var currentQuestion = 0;
let highscoresButton = document.querySelector(".scores")
let choicesButton = document.querySelector("#choices")
let endscreen = document.querySelector("#end-screen")
let submitButton = document.querySelector("#submit")

let timeRemaining = 75;
let score = 0;
let interval;

//function that starts the quiz and timer
// start button
const startButton = document.getElementById("start")
startButton.addEventListener("click", startQuiz);

// start quiz function
function startQuiz() {
    startScreen.classList.remove("start");
    startScreen.classList.add("hide");
    
    showQuestion();
    interval = setInterval(countdown, 1000);
}

// Show question function
function showQuestion() {
    question.classList.remove("hide");

    const questionTitle = document.querySelector("#question-title")
    
    questionTitle.textContent = questionBank[currentQuestion].question;

    const choices = document.getElementById("choices");
    choices.innerHTML = "";

    //append buttons to choices button displaying answers
    for (let i = 0; i < questionBank[currentQuestion].options.length; i++) {
        const button = document.createElement("button");
        button.textContent = questionBank[currentQuestion].options[i];
        button.addEventListener("click", checkAnswer);
        choices.appendChild(button);
    }
    currentQuestion++;
}

// check answer function
function checkAnswer(event) {
    if (event.target.textContent === questionBank[currentQuestion].correct) {
        score++;
    } else {
        timeRemaining -= 10;
    }
    currentQuestion++;
    if (currentQuestion === questionBank.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

//counter for time countdown
function countdown() {
    timeRemaining--;
    const timer = document.getElementById("time");
    timer.innerHTML = timeRemaining;
    if (timeRemaining <= 0) {
        endQuiz();
        question.classList.add("hide");
    }
}

//end Quiz function
function endQuiz() {
    clearInterval(interval);

    const endScreen = document.querySelector("#end-screen");
    endscreen.classList.remove("hide");

    const finalScore = document.querySelector("#final-score");
    finalScore.textContent = score;

    const initialsInput = document.querySelector("#intitials");
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", function () {
        saveScore();
        // redirect to highscores page
        location.href = "highscores.html"; 
    });

}

//saveScore function
function saveScore() {
    let count;
    if (!localStorage.getItem("count")) {
        count = 1;
        localStorage.setItem("count", count);
    } else {
        count = parseInt(localStorage.getItem("count"));
    }

    const initialsInput = document.querySelector("#initials");
    const initials = initialsInput.value;
    const scoreData = { initials, score };
    localStorage.setItem("score" + count, JSON.stringify(scoreData));
    count++;
    localStorage.setItem("count", count);
}
 

