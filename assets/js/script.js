var startButton = document.getElementById("startbtn");
var questionBoxSection = document.getElementById("questionBox");
var introSection = document.querySelector(".intro");
var questionDiv = document.querySelector("#questions");

var qIndex = 0;
//CREATE QUESTIONS
var questions = [
  //group of question-answers pairs
  {
    question: "What's 1+1?",
    answers: [1, 2, 3, 4],
    correct: 2,
  },
  {
    question: "What's 1-1?",
    answers: [1, 2, 3, 4],
    correct: 2,
  },
];

function startQuiz() {
  console.log("Started");
  //startButton.classList.add("hidden");

  introSection.classList.add("hidden");

  questionBoxSection.classList.remove("hidden");
  questionBoxSection.classList.add("show");
  nextQuestion();
}

function nextQuestion() {
  questionDiv.textContent = questions[qIndex].question;

  //Do same thing for answers HERE
  //Loop through answer array
  //For each one of the answers
  //create button dynamically BY:
  //create an empty button
  //add text to that button (one of the answers)
  //append the button to the answerBtns div

  //Do an onlick event, call selecCorrectAnswer to check answer;
}

function selectCorrectAnswer() {
  //When an answer is clicked
  //Check to see if answer matches correct answer or not
  //increase qIndex by 1 qIndex++
  //Call next Question
}

// should I make a function for wrong answers? or should those be in if/else statements?

startButton.addEventListener("click", startQuiz);
