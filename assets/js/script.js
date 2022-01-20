// Start of global variables
var score = 0;
var qIndex = 0;
var mkParagraph = document.createElement("p");
var timeStamp = document.querySelector("#timeStamp");
var penalty = 10;
var timeLeft = 75;
var timer = document.querySelector("#startButton");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("intro");
var holdInterval = 0;
//End of global variables


//Start of questions, text and answer section
var questions = [
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    text: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    text: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    text: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    text: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "curly brackets",
  },
  {
    question: "Commonly used data types DO not include:",
    text: ["strings", "booleans", "alerts", "numbers"],
    answer: "booleans",
  },
];


// Start of timer
timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      timeLeft--;
      timeStamp.textContent = "Time: " + timeLeft;

      if (timeLeft <= 0) {
        clearInterval(holdInterval);
        finishedQuiz();
        timeStamp.textContent = "Uh oh! Sorry but your time's up!";
      }
    }, 1000);
  }
  randomQuestions(qIndex);
});
//End of timer


// Start of Question for loop
function randomQuestions(qIndex) {
  questionsDiv.innerHTML = "";
  mkParagraph.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[qIndex].question;
    var userChoices = questions[qIndex].text;
    questionsDiv.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(mkParagraph);
    mkParagraph.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}


function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // Correct condition
    if (element.textContent == questions[qIndex].answer) {
      score++;
      createDiv.textContent = "Correct!";
      // Correct condition
    } else {
      // Will deduct -5 seconds off timeLeft for wrong answers
      timeLeft  = timeLeft - penalty;
      createDiv.textContent = "Sorry, not quite!";
    }
  }
  qIndex++;

  if (qIndex >= questions.length) {
    finishedQuiz();
    createDiv.textContent =
      "You did it! Let's see what your score is!" +
      " " +
      "You got  " +
      score +
      "/" +
      questions.length +
      " Correct!";
  } else {
    render(qIndex);
  }
  questionsDiv.appendChild(createDiv);
}
