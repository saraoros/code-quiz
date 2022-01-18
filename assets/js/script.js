const startButton = document.getElementById("startbtn");
const questionBoxSection = document.getElementById("questionBox")
const introSection = document.getElementById("hide")

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  console.log("Started");
  startButton.classList.add("hidden");
  questionBoxSection.classList.add("hidden");
  introSection.classList.add("intro");
}

function nextQuestion() {}

function selectCorrectAnswer() {}

// should I make a function for wrong answers? or should those be in if/else statements?
