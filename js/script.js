const startButton = document.querySelector("#startBtn");
const counter = document.querySelector("#counter");
const quizContainer = document.querySelector("#quizContainer");
const quizTitle = document.querySelector("#quizTitle");
let score = 0;
const questions = [
    {
        question: "the first question",
        options: {
            a: "option1", 
            b: "option2", 
            c: "option3", 
            d: "option4"
        },
        answer: "b"
    }, 
    {
        question: "the second question",
        options: {
            a: "option1", 
            b: "option2", 
            c: "option3", 
            d: "option4"
        },
        answer: "b"
    }, 
    {
        question: "the third question",
        options: {
            a: "option1", 
            b: "option2", 
            c: "option3", 
            d: "option4"
        },
        answer: "c"
    }
]

// Create timer
const countDown = function() {
    let seconds = 60;
    setInterval(function() {
        seconds--;

        if (seconds < 0) {
            alert("Time's up!");
            seconds = 60;
        }
        counter.textContent = seconds;
    }, 1000);
}

// Create question elements
const createQuestions = function() {
    // Create answer choices
    const answerEl = document.createElement("button");
    answerEl.className = "answer-button";
    answerEl.textContent = questions[0].options.a;

    quizTitle.textContent = questions[0].question;
    quizContainer.appendChild(answerEl);

    // Get the key that matches the value of the answer
    const checkAnswer = function(answer) {
        return answer === questions[0].answer;
    }

    // Get an array of the options' keys and find the first one that matches the answer's value
    const answerKey = Object.keys(questions[0].options).find(checkAnswer);

    // Logging its value
    console.log(questions[0].options[answerKey]);
};

// Show the high score
const showHighScore = function() {

}

createQuestions();
startButton.onclick = function() {
    countDown();
    quizTitle.classList.remove("center");
    startButton.remove();
}
