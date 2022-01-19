var startButton = document.getElementById("startbtn");
var questionBoxSection = document.getElementById("questionBox");
var introSection = document.querySelector(".intro");
var questionDiv = document.querySelector("#questions");
var timerEl = document.getElementById("countdown");
var randomQuestions, qIndex;
var answerButtons = document.getElementById("answerBtns");
//var qIndex = 0;

//CREATE QUESTIONS
var questions = [
  //group of question-answers pairs
  {
    question: "Commonly used data types DO not include:",
    answers: [
      { text: "stings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: true },
      { text: "parenthesis", correct: false },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [
      { text: "numbers and arrays", correct: false },
      { text: "other arrays", correct: true },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false },
    ],
  },
];

// original question format made only the first one with Tutor:
// {
//   question: "Commonly used data types DO not include:",
//   answers: ["strings", "booleans", "alerts", "numbers"],
//   correct: [2],
// },
// {
//   question: "The condition in an if/else statement is enclosed with ______.",
//   answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
//   //correct: curly[1],
// },
// {
//   question: "Arrays in JavaScript can be used to store ______.",
//   answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
//   //correct: all[3],
// },

// {
//   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//   answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
//   //correct: console.log[3],
// },

// {
//   question: "String values must be enclosed within ____ when being assigned to variables.",
//   answers: ["commas", "curly brackets", "quotes", "parenthesis"],
//   //correct: quotes[2],
// },

function startQuiz() {
  console.log("Started");
  introSection.classList.add("hidden");
  randomQuestions = questions.sort(() => Math.random() - 0.5);
  qIndex = 0;
  questionBoxSection.classList.remove("hidden");
  questionBoxSection.classList.add("show");

  nextQuestion();
}

function viewQuestion(question) {
  //the line below was originally under 'nextQuestion' function done by Tutor
  questionDiv.textContent = questions[qIndex].question;
 

  questionDiv.answers.forEach((answer) => {
    // line below is from Web Dev Simplified Youtube video
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("anbtn1", "anbtn2", "anbtn3", "anbtn4");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
    // end code from Web Dev Simplified
  });
}


function nextQuestion() {
  viewQuestion(randomQuestions[qIndex]);

  //Do same thing for answers HERE
  //Loop through answer array
  //For each one of the answers
  //create button dynamically BY:
  //create an empty button
  //add text to that button (one of the answers)
  //append the button to the answerBtns div

  //Do an onclick event, call selectCorrectAnswer to check answer;
}

function selectCorrectAnswer() {
  //When an answer is clicked
  //Check to see if answer matches correct answer or not
  //increase qIndex by 1 qIndex++
  //Call next Question
}

// should I make a function for wrong answers? or should those be in if/else statements?

startButton.addEventListener("click", startQuiz);
