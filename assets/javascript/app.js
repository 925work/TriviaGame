var timeLeft = 70;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;
var questions = [
    {
        question: "Which fictional city is the home of Batman?",
        answers: ["Smallville", "Atlantis", "Metroville", "Gotham"],
        right: 3
    },
    {
        question: "Where does Hank Hill work?",
        answers: ["Propane and Propane Accessories", "Strickland Propane", "Bob's Burgers", "Arlene Propane"],
        right: 1
    },
    {
        question: "What is the powerhouse of the cell?",
        answers: ["Mitochondria", "Chloroplast", "Cell wall", "Nucleus"],
        right: 0
    },
    {
        question: "What is the number one cause of death in America?",
        answers: ["Heart disease", "Cancer", "Suicide", "Automotive accidents"],
        right: 0
    },
    {
        question: "What country first made use of paper money?",
        answers: ["Germany", "United States of America", "China", "Britain"],
        right: 2
    },
    {
        question: "What percent of an egg's weight is its shell?",
        answers: ["50%", "12%", "33%", "20%"],
        right: 1
    },
    {
        question: "Which of these video games were NOT made by Blizzard?",
        answers: ["World of Warcraft", "Starcraft", "Super Smash Bros Ultimate", "Overwatch"],
        right: 2
    },
    {
        question: "In Tetris, What is the name of the straight line piece?",
        answers: ["Teewee", "Smashboy", "Blue Ricky", "Hero"],
        right: 3
    }
];

$(".startButton").on("click", start);
$(".tryAgain").on("click", tryAgain);


function start(){
    clearInterval(intervalID);
    intervalID = setInterval(decrement, 1000);
    loadQuestions();
    $(".startButtonContainer").empty();
    $(".timerContainer").text("Time Left: " + timeLeft);
}

function decrement(){
    timeLeft--;
    console.log(timeLeft);
    $(".timerContainer").text("Time Left: " + timeLeft);
    if(timeLeft===0){
        stop();
        scoring();
    }
}

function stop(){
    clearInterval(intervalID);
    showResults();
}

function loadQuestions(){
    //question 1
    $(".question0").html("<h1>" + questions[0].question + "</h1>");
    $(".answers0").html("<input type='radio' name='answer0' value='0'>" + "<label>" + questions[0].answers[0] + "</label>"
    + "<input type='radio' name='answer0' value='1'>" + "<label>" + questions[0].answers[1] + "</label>"
    + "<input type='radio' name='answer0' value='2'>" + "<label>" + questions[0].answers[2] + "</label>"
    + "<input type='radio' name='answer0' value='3'>" + "<label>" + questions[0].answers[3] + "</label><br><br>");
    //question 2
    $(".question1").html("<h1>" + questions[0].question + "</h1>");
    $(".answers1").html("<input type='radio' name='answer1' value='0'>" + "<label>" + questions[1].answers[0] + "</label>"
    + "<input type='radio' name='answer1' value='1'>" + "<label>" + questions[1].answers[1] + "</label>"
    + "<input type='radio' name='answer1' value='2'>" + "<label>" + questions[1].answers[2] + "</label>"
    + "<input type='radio' name='answer1' value='3'>" + "<label>" + questions[1].answers[3] + "</label><br><br>");
    //question 3
    $(".question2").html("<h1>" + questions[2].question + "</h1>");
    $(".answers2").html("<input type='radio' name='answer2' value='0'>" + "<label>" + questions[2].answers[0] + "</label>"
    + "<input type='radio' name='answer2' value='1'>" + "<label>" + questions[2].answers[1] + "</label>"
    + "<input type='radio' name='answer2' value='2'>" + "<label>" + questions[2].answers[2] + "</label>"
    + "<input type='radio' name='answer2' value='3'>" + "<label>" + questions[2].answers[3] + "</label><br><br>");
    //question 4
    $(".question3").html("<h1>" + questions[3].question + "</h1>");
    $(".answers3").html("<input type='radio' name='answer3' value='0'>" + "<label>" + questions[3].answers[0] + "</label>"
    + "<input type='radio' name='answer3' value='1'>" + "<label>" + questions[3].answers[1] + "</label>"
    + "<input type='radio' name='answer3' value='2'>" + "<label>" + questions[3].answers[2] + "</label>"
    + "<input type='radio' name='answer3' value='3'>" + "<label>" + questions[3].answers[3] + "</label><br><br>");
    //question 5
    $(".question4").html("<h1>" + questions[4].question + "</h1>");
    $(".answers4").html("<input type='radio' name='answer4' value='0'>" + "<label>" + questions[4].answers[0] + "</label>"
    + "<input type='radio' name='answer4' value='1'>" + "<label>" + questions[4].answers[1] + "</label>"
    + "<input type='radio' name='answer4' value='2'>" + "<label>" + questions[4].answers[2] + "</label>"
    + "<input type='radio' name='answer4' value='3'>" + "<label>" + questions[4].answers[3] + "</label><br><br>");
    //question 6
    $(".question5").html("<h1>" + questions[5].question + "</h1>");
    $(".answers5").html("<input type='radio' name='answer5' value='0'>" + "<label>" + questions[5].answers[0] + "</label>"
    + "<input type='radio' name='answer5' value='1'>" + "<label>" + questions[5].answers[1] + "</label>"
    + "<input type='radio' name='answer5' value='2'>" + "<label>" + questions[5].answers[2] + "</label>"
    + "<input type='radio' name='answer5' value='3'>" + "<label>" + questions[5].answers[3] + "</label><br><br>");
    //question 7
    $(".question6").html("<h1>" + questions[6].question + "</h1>");
    $(".answers6").html("<input type='radio' name='answer6' value='0'>" + "<label>" + questions[6].answers[0] + "</label>"
    + "<input type='radio' name='answer6' value='1'>" + "<label>" + questions[6].answers[1] + "</label>"
    + "<input type='radio' name='answer6' value='2'>" + "<label>" + questions[6].answers[2] + "</label>"
    + "<input type='radio' name='answer6' value='3'>" + "<label>" + questions[6].answers[3] + "</label><br><br>");
    //question 8
    $(".question7").html("<h1>" + questions[7].question + "</h1>");
    $(".answers7").html("<input type='radio' name='answer7' value='0'>" + "<label>" + questions[7].answers[0] + "</label>"
    + "<input type='radio' name='answer7' value='1'>" + "<label>" + questions[7].answers[1] + "</label>"
    + "<input type='radio' name='answer7' value='2'>" + "<label>" + questions[7].answers[2] + "</label>"
    + "<input type='radio' name='answer7' value='3'>" + "<label>" + questions[7].answers[3] + "</label><br><br>");
    $(".questionsContainer").append("<button class='submit'>" + "SUBMIT" +"</button>")
    $(".submit").on("click", function(){
        scoring();
        showResults();
    });
}

function scoring(){
    var userAnswer0 = $("input[name='answer0']:checked").val();
    if(userAnswer0 === undefined){
        unanswered++;
    } 
}

function tryAgain() {
    location.reload();
}

function showResults (){
    $(".timerContainer").hide();
    $(".questionsContainer").hide();
    $(".rightWrongContainer").show();
    $(".correct").html("Correct answers: " + correct + "<br>");
    $(".wrong").html("Wrong answers: " + wrong +"<br>");
    $(".unanswered").text("Unanswered questions: " + unanswered);
}