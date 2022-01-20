// Start of global variables
var score = 0;
var qIndex = 0;
var mkParagraph = document.createElement("p");
var timeStamp = document.querySelector("#timeStamp");
var penalty = 10;
var timeLeft = 75;
var timer = document.querySelector("#startButton");
var questionsDiv = document.querySelector("#questionsDiv");
var intro = document.querySelector("intro");
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
      timeStamp.textContent = "Timer: " + timeLeft;

      if (timeLeft <= 0) {
        clearInterval(holdInterval);
        finishedQuiz();
        timeStamp.textContent = "Uh oh! Sorry but your time's up!";
      }
    }, 1000);
  }
  showQuestions(qIndex);
});
//End of timer

// Start of Question for loop
function showQuestions(qIndex) {
  questionsDiv.innerHTML = "";
  mkParagraph.innerHTML = "";

  for (var i = 0; i < questions.length; i++) {
    var usersQuestion = questions[qIndex].question;
    var questChosen = questions[qIndex].text;
    questionsDiv.textContent = usersQuestion;
  }
  questChosen.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(mkParagraph);
    mkParagraph.appendChild(listItem);
    listItem.addEventListener("click", scoreKeeper);
  });
}

function scoreKeeper(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    if (element.textContent == questions[qIndex].answer) {
      score++;
      createDiv.textContent = "That's Correct!";
    } else {
      timeLeft = timeLeft - penalty;
      createDiv.textContent = "Sorry, that's not quite the answer!";
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
    showQuestions(qIndex);
  }
  questionsDiv.appendChild(createDiv);
}

function finishedQuiz() {
  questionsDiv.innerHTML = "";
  timeStamp.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "";

  questionsDiv.appendChild(createH1);

  var finalScore = document.createElement("p");
  finalScore.setAttribute("id", "finalScore");

  questionsDiv.appendChild(finalScore);

  // Final score and time for loop
  if (timeLeft >= 0) {
    var timeRemaining = timeLeft;
    var scoreTotal = document.createElement("p");
    clearInterval(holdInterval);
    finalScore.textContent = "Your final score is " + timeRemaining;

    questionsDiv.appendChild(scoreTotal);
  }

  // Start of high scores page setup
  var userName = document.createElement("label");
  userName.setAttribute("id", "username");
  userName.textContent = "Enter your name: ";

  questionsDiv.appendChild(userName);

  var inputBox = document.createElement("input");
  inputBox.setAttribute("type", "text");
  inputBox.setAttribute("id", "name");
  inputBox.textContent = "";

  questionsDiv.appendChild(inputBox);

  var submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submitButton");
  submitButton.textContent = "Submit";

  questionsDiv.appendChild(submitButton);

  submitButton.addEventListener("click", function () {
    var userName = inputBox.value;

    if (userName === null) {
      alert("Oops! Please enter a valid entry!");
    } else {
      var finalScore = {
        name: userName,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
    }
  });
}
