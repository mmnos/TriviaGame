// https://plentifun.com/funny-trivia-questions-answers // source for trivia questions

// array of objects which hold the trivia questions + answers
let questions = [
    {
        q : "Fortune cookies were invented in the United States : ",
        a : "true"
    },
    {
        q : "Donkey's kill more people than planes : ",
        a : "true"
    },
    {
        q : "Chimpanzees hold the world record of having the quickest sexual intercourse, ~ 3 seconds : ",
        a : "true"
    },
    {
        q : "The average person spends 1 year of their life on the toilet : ",
        a : "false"
        // correct answer is 3 years
    },
    {
        q : "Michael is the most common name in the world : ", 
        a : "false"
        // correct answer is Muhammad
    }
];

let correctGuess = 0;
let wrongGuess = 0;
let countdown = 10;
let questionIndex = 0;
let handle;
let imgHandle;
let timerCount;
let answerPick = false;

let $trueBtn = $("<button>true</button>").addClass("btn btn-primary true-false");
let $falseBtn = $("<button>false</button>").addClass("btn btn-primary true-false");

let $correct = $("<p>").addClass("correctAnswers");
let $wrong = $("<p>").addClass("wrongAnswers");
// let $img1 = $("<img src='./assets/images/bravo.gif'>").addClass("goodJob");
// let $img2 = $("<img src='./assets/images/yousuck.gif'>").addClass("youSuck");

function getNextQuestion() {

    answerPick = true;
    
    if ( handle ) {

        clearTimeout( handle );
        
    }
    
    handle = setTimeout( getNextQuestion, 10000 );
    
    $( "#quizQuestion" ).html( questions[questionIndex].q );
    $( "#quizQuestion" ).append( $trueBtn );
    $( "#quizQuestion" ).append( $falseBtn );

    // if ( questionIndex > 4 ) {
        //     console.log("stop");
        //     clearTimeout( handle );
        // }
        
        // timerCount = setTimeout(timer, 1000);
    timer();
        
}

// function displayImage() {

//     if ( imghandle ) {

//         clearTimeout( imghandle );

//     }
  
//     imghandle = setTimeout( getNextQuestion, 3000 );

//     $("#quizQuestion").append($img1);



// }

function timer() {

    countdown--;
    $( "#timer" ).html( countdown );
    
    if ( countdown === 0 ) {
        
        parseInt( wrongGuess += 1 );
        console.log("you ran out of time, you got: " + wrongGuess + "wrong");
        questionIndex++;
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

    countdown = 10;
    questionIndex = 0;
    correctGuess = 0;
    wrongGuess = 0;

}

// if ( questionIndex > 4 ) {
//     $("#startBtn").show();
//     clearTimeout( timerCount );
// }

// $("#resetBtn").hide();

$(document).on("click", "#startBtn" , function(event) {
    
    getNextQuestion();
    $("#startBtn").hide();
    // $("#startBtn").show();
    
});

$(document).on("click", "#resetBtn" , function(event) {
    
    reset();
    getNextQuestion();
    // $("#startBtn").hide();
    
});

$(document).on("click", ".true-false" , function(event) {

    // $(this).data('clicked', true);
    
    if ( this.textContent === questions[questionIndex].a ) {
        parseInt(correctGuess += 1);
        console.log( "you got: " + correctGuess + "right" );
        countdown = 10;
        clearTimeout( timerCount );
        setTimeout( getNextQuestion, 3000 );
        // displayImage();
    } else {
        parseInt( wrongGuess += 1 );
        console.log( "you got: " + wrongGuess + "wrong" );
        countdown = 10;
        clearTimeout( timerCount );
        setTimeout( getNextQuestion, 3000 );
        // displayImage();
    }
    questionIndex++;
    // console.log(questionIndex);

    if ( questionIndex > 4 ) {

        clearTimeout( timerCount );

        $("#quizQuestion").html( $correct ).html( `Correct : ${parseInt( correctGuess )}` );
        $("#quizQuestion").append( $wrong ).append( `Incorrect : ${parseInt( wrongGuess )}` );

    }
    
});