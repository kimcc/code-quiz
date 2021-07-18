// Quiz questions from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
const startButton = document.querySelector("#startBtn");
const counter = document.querySelector("#counter");
const quizContainer = document.querySelector("#quizContainer");
const quizTitle = document.querySelector("#quizTitle");
const quizIntro = document.querySelector("#quizIntro");
const answerContainer = document.querySelector("#answerContainer");
const quizQuestion = document.querySelector("#quizQuestion");
const quizResult =  document.querySelector("#quizResult");

const optionA = document.querySelector("#optionA");
const optionB = document.querySelector("#optionB");
const optionC = document.querySelector("#optionC");
const optionD = document.querySelector("#optionD");

let score = 0;
let currentNum = 0;

const questions = [
    {
        question: "What HTML tags do you use to enclose your Javascript?",
        options: {
            a: "<scripting>", 
            b: "<script>", 
            c: "<js>", 
            d: "<javascript>"
        },
        answer: "b"
    }, 
    {
        question: 'How do you write "Hello World" in an alert box?',
        options: {
            a: "msg(\"Hello World\");", 
            b: "msgBox(\"Hello World\");", 
            c: "alert(\"Hello World\");", 
            d: "alertBox(\"Hello World\");"
        },
        answer: "c"
    }, 
    {
        question: "How do you write an IF statement in Javascript?",
        options: {
            a: "if i == 5 then", 
            b: "if i = 5", 
            c: "if (i == 5)", 
            d: "if i = 5 then"
        },
        answer: "c"
    },
    {
        question: "How does a FOR loop start?",
        options: {
            a: "for i = 1 to 5", 
            b: "for (let i = 0; i <= 5; i++)", 
            c: "for (let i = 0; i <= 5)", 
            d: "for (i <= 5; i++)"
        },
        answer: "b"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: {
            a: 'const colors = ["red", "green", "blue"]', 
            b: 'const colors = (1:"red", 2:"green", 3:"blue")', 
            c: 'const colors = "red", "green", "blue"', 
            d: 'const colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
        },
        answer: "a"
    }
]

// Create timer
const countDown = function() {
    let seconds = 90;
    setInterval(function() {
        seconds--;

        if (seconds < 0) {
            alert("Time's up!");
            seconds = 90;
        }
        counter.textContent = `Time: ${seconds}`;
    }, 1000);
}

// Create question elements and set their text
const createQuestions = function(currentQuestionChoices) {
    // Set the text inside the questions
    optionA.textContent = currentQuestionChoices.a;
    optionB.textContent = currentQuestionChoices.b;
    optionC.textContent = currentQuestionChoices.c;
    optionD.textContent = currentQuestionChoices.d;

    optionA.onclick = selectAnswerHandler;
    optionB.onclick = selectAnswerHandler;
    optionC.onclick = selectAnswerHandler;
    optionD.onclick = selectAnswerHandler;
};

// Go through each of the answer options and return the correct answer
const findCorrectAnswer = function() {
    const currentQuestionChoices = questions[currentNum].options;
    quizQuestion.textContent = questions[currentNum].question;
    createQuestions(currentQuestionChoices);

    // Get the key that matches the value of the answer
    const answerKey = function(answer) {
        return answer === questions[currentNum].answer;
    }

    // Get an array of the options' keys and find the first one that matches the answer's value
    const findAnswer = Object.keys(questions[currentNum].options).find(answerKey);
    const answer = questions[currentNum].options[findAnswer];

    return answer;
}

// Check their answer and show correct or incorrect message
const selectAnswerHandler = function(event) {
    setTimeout(function() {
        quizResult.classList.add("fade");
    }, 800);

    if (event.target.textContent === findCorrectAnswer()) {
        quizResult.textContent = "You are correct!";
    } else {
        quizResult.textContent = "Sorry, you are incorrect!";
    }
    quizResult.classList.remove("fade");

    currentNum++;

    if (currentNum < questions.length) {
        findCorrectAnswer();
    } else {
        showHighScore();
    }
    
}

// Show the high score
const showHighScore = function() {
    alert("Show high score");
}

startButton.onclick = function() {
    countDown();
    answerContainer.classList.remove("hidden");
    quizTitle.classList.add("hidden");
    quizIntro.classList.add("hidden");
    quizResult.classList.remove("hidden");
    startButton.remove();
    findCorrectAnswer();
}
