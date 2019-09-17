var timeLeft = 80;
var timeRemaining = 80;
var correct = 0;
var wrong = 0;
var countingDown = false;
var intervalID;
var questions = [
    {
        question: "Which fictional city is the home of Batman?",
        answers: ["Smallville", "Atlantis", "Metroville", "Gotham"],
        right: "Gotham"
    },
    {
        question: "Where does Hank Hill work?",
        answers: ["Propane and Propane Accessories", "Strickland Propane", "Bob's Burgers", "Arlene Propane"],
        right: "Strickland Propane"
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Mitochondria", "Chloroplast", "Cell wall", "Nucleus"],
        right: "Mitochondria"
    },
    {
        question: "What is the number one cause of death in America?",
        answers: ["Heart disease", "Cancer", "Suicide", "Automotive accidents"],
        right: "Heart disease"
    },
    {
        question: "What country first made use of paper money?",
        answers: ["Germany", "United States of America", "China", "Britain"],
        right: "China"
    },
    {
        question: "What percent of an egg's weight is its shell?",
        answers: ["50%", "12%", "33%", "20%"],
        right: "12%"
    },
    {
        question: "Which of these video games were NOT made by Blizzard?",
        answers: ["World of Warcraft", "Starcraft", "Super Smash Bros Ultimate", "Overwatch"],
        right: "Super Smash Bros Ultimate"
    },
    {
        question: "In Tetris, What is the name of the straight line piece?",
        answers: ["Teewee", "Smashboy", "Blue Ricky", "Hero"],
        right: "Hero"
    }
];

$(".startButton").on("click", start);

function start(){
    clearInterval(intervalID);
    intervalId = setInterval(decrement, 1000);
    loadQuestions();
}

function decrement(){
    timeLeft--;
    console.log(timeLeft);
}

function loadQuestions(){
    for( var i =0; i < questions.length; i++){
        $(".questionsContainer").append("<h4>"+questions[i].question+"<h4>");
    for( var j =0; j < questions[1].allAnswers.length; j++){
        $(".questionsContainer").append("<button class=button>"+questions[i].allAnswers[j]+"</button>" )
}

function tryAgain() {
    location.reload();
}