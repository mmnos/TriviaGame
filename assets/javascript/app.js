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
let answerPick = true;

let trueBtn = $("<button> True </button>").addClass("btn btn-primary true");
let falseBtn = $("<button> False </button>").addClass("btn btn-primary false");

function getNextQuestion() {

    answerPick = true;
    
    if ( handle ) {

        clearTimeout( handle );
        
    }
    
    handle = setTimeout( getNextQuestion, 10000 );
    
    $("#quizQuestion").html( questions[questionIndex].q );
    $("#quizQuestion").append( trueBtn );
    $("#quizQuestion").append( falseBtn );
    
    questionIndex++;
    // timerCount = setTimeout(timer, 1000);
    timer();
    
}

function correct() {

    if ( answerPick ) {

        if ( questions[0, 1, 4] ) {

            console.log("You're correct!");
            
        } else if ( questions[2, 3] ) {
            
            console.log("You're wrong!");
            
        }
        answerPick = false;
}

}

function wrong() {

    if ( answerPick ) {

        if ( questions[2, 3] ) {

            console.log("You're correct!");
            
        } else if ( questions[0, 1, 4] ) {
            
            console.log("You're wrong!");
            
        }
        answerPick = false;

}

}

// function displayImage() {

//     if ( imghandle ) {

//         clearTimeout( imghandle );

//     }
  
//     imghandle = setTimeout( getNextQuestion, 3000 );

//     let image = $("<img>");

// }

function timer() {

    countdown--;
    $("#timer").html(countdown);
    
    if ( countdown === 0 ) {
        
        countdown = 10;
        getNextQuestion();

    }

    if ( timerCount ) {

        clearTimeout( timerCount );

    }
  
    timerCount = setTimeout( timer, 1000 );

}

// function timer() {

//   countdown--;
//   $("#timer").text(`Time Left: ${countdown}`);

//   if (countdown === 0) {

//       getNextQuestion();
//     clearTimeout( handle );
//     return false;

//   }
//   else {

//     setTimeout(timer, 1000)

//   }
// }

function reset() {

}

$(document).on("click", "#startBtn" , function(event) {
    
    getNextQuestion();
    
});

$(document).on("click", ".true" , function(event) {
    
    correct();
    wrong();
    // displayImage();
    
});

$(document).on("click", ".false" , function(event) {
    
    wrong();
    correct();
    
});