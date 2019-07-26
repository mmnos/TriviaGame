// https://plentifun.com/funny-trivia-questions-answers // source for trivia questions

// array of objects which hold the trivia questions + answers
let questions = [
    {
        q : "Fortune cookies were invented in the United States : ",
        a : true
    },
    {
        q : "Donkey's kill more people than planes : ",
        a : true
    },
    {
        q : "Michael is the most common name in the world : ", 
        a : false
        // correct answer is Muhammad
    },
    {
        q : "The average person spends 1 year of their life on the toilet : ",
        a : false
        // correct answer is 3 years
    },
    {
        q : "Chimpanzees hold the world record of having the quickest sexual intercourse, ~ 3 seconds : ",
        a : true
    }
];

let countdown = 10;
let questionIndex = 0;
let handle;
let imgHandle;
let timerCount;
let trueBtn = $("<button> True </button>").addClass("btn btn-primary true");
let falseBtn = $("<button> False </button>").addClass("btn btn-primary false");

function getNextQuestion() {

    if ( handle ) {

        clearTimeout(handle);

    }
  
    handle = setTimeout(getNextQuestion, 10000);
    
    $("#quizQuestion").html(questions[questionIndex].q);
    $("#quizQuestion").append(trueBtn);
    $("#quizQuestion").append(falseBtn);

    questionIndex++;
    // timerCount = setTimeout(timer, 1000);
    timer();
    
}

function displayImage() {

    if ( imghandle ) {

        clearTimeout(imghandle);

    }
  
    imghandle = setTimeout(getNextQuestion, 3000);

    // append image here

}

function timer() {

    countdown--;
    $("#timer").html(countdown);
    
    if ( countdown === 0 ) {
        // clearInterval(timerCount);
        getNextQuestion();
        countdown = 10;
    }

    if ( timerCount ) {

        clearTimeout(timerCount);

    }
  
    timerCount = setTimeout(timer, 1000);

}

function start() {
    
}

function reset() {

}

$(document).on("click", "#startBtn" , function(event) {
    
    getNextQuestion();
    
});

$(document).on("click", ".true" , function(event) {
    
    displayImage();
    
});

$(document).on("click", ".false" , function(event) {
    
    displayImage();
    
});