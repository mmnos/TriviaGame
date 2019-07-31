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

// initializes variables for use
let correctGuess = 0;
let wrongGuess = 0;
let countdown = 10;
let questionIndex = 0;
let handle;
let imgHandle;
let timerCount;
let answerPick = false;
let score;

// variables created to hold specific elements that are displayed on the page
let $trueBtn = $("<button>true</button>").addClass("btn true-false");
let $falseBtn = $("<button>false</button>").addClass("btn true-false");
let $correct = $("<p>").addClass("correctAnswers");
let $wrong = $("<p>").addClass("wrongAnswers");
let $score = $("<p>").addClass("score");
let $img1 = $("<img src='./assets/images/bravo.gif'>").addClass("goodJob");
let $img2 = $("<img src='./assets/images/yousuck.gif'>").addClass("youSuck");

// displays a new question every 10 seconds
function getNextQuestion() {

    $("#timer").show();

    answerPick = true;
    
    if ( handle ) {

        clearTimeout( handle );
        
    }

    if ( questionIndex < 5 ) {
    
        handle = setTimeout( getNextQuestion, 10000 );

        $( "#quizQuestion" ).html( questions[questionIndex].q );
        $( "#quizQuestion" ).append( $trueBtn );
        $( "#quizQuestion" ).append( $falseBtn );
        timer();

    } else {

        scores();
        clearTimeout ( timerCount );
        $( "#timer" ).hide();

    }
        
}

// function that holds the timer for the game
function timer() {

    countdown--;
    $( "#timer" ).html( `Time left : ${ countdown }` );
    
    if ( countdown === 0 ) {

        if ( questionIndex < 5 ) {
        
            parseInt( wrongGuess += 1 );
            questionIndex++;
            countdown = 10;
            
        }

        // first time it runs, 'timercount' is 'undefined' or 'null'
        // so it won't run the if statement
        // once it exists, either !== null or !== undefined, it'll clearTimeout
        if ( timerCount ) {
            
            clearTimeout( timerCount );
            
        }
    }

    // "timerCount" now "exists"
    timerCount = setTimeout( timer, 1000 );
    
}

// displays the users final score once game ends
function scores() {

    $("#resetBtn").show();

    if ( questionIndex > 4 ) {

        clearTimeout( timerCount );

        $("#quizQuestion").html( $correct ).html( `Correct : ${parseInt( correctGuess )}` );
        $("#quizQuestion").append( $wrong ).append( `Incorrect : ${parseInt( wrongGuess )}` );
        
        if ( correctGuess === 0 ) {

            $("#quizQuestion").append( $score ).append( `Score : 0%` );
            
        } else if ( correctGuess === 1 ) {

            $("#quizQuestion").append( $score ).append( `Score : 20%` );

        } else if ( correctGuess === 2 ) {

            $("#quizQuestion").append( $score ).append( `Score : 40%` );

        } else if ( correctGuess === 3 ) {

            $("#quizQuestion").append( $score ).append( `Score : 60%` );

        } else if ( correctGuess === 4 ) {

            $("#quizQuestion").append( $score ).append( `Score : 80%` );

        } else {

            $("#quizQuestion").append( $score ).append( `Score : 100%` );

        }

    }

}

// allows replayability upon clicking the 'Play Again' button without refreshing the page
function reset() {

    $( "#timer" ).show();
    countdown = 10;
    questionIndex = 0;
    correctGuess = 0;
    wrongGuess = 0;

}

$("#resetBtn").hide();

// once clicked, the start button is hidden and the game starts
$(document).on("click", "#startBtn" , function(event) {
    
    getNextQuestion();
    $("#startBtn").hide();
    
});

// on click, it resets the game to original state
$(document).on("click", "#resetBtn" , function(event) {
    
    reset();
    getNextQuestion();
    
});

// determines if the correct answer was chosen and increments the appropriate counter
// increases the index to display the new question
// once the game is over, the amount of right/wrong choices + total score is displayed
$(document).on("click", ".true-false" , function(event) {
    
    if ( this.textContent === questions[questionIndex].a ) {

        parseInt( correctGuess += 1 );
        console.log( "you got: " + correctGuess + "right" );
        countdown = 10;
        clearTimeout( timerCount );
        
        // This section shows an image for 5
        $("#timer").hide();
        $("#quizQuestion").html('');
        $("#quizQuestion").append($img1);

        // wrap this function in a setTimeout to execute after 5 seconds
        let myFunction = function() {

            $img1.remove();
            getNextQuestion();

        };
        setTimeout(myFunction, 2000);

    } else {
        parseInt( wrongGuess += 1 );
        console.log( "you got: " + wrongGuess + "wrong" );
        countdown = 10;
        clearTimeout( timerCount );

        // This section shows an image for 5
        $("#timer").hide();
        $("#quizQuestion").html('');
        $("#quizQuestion").append($img2);

        // wrap this function in a setTimeout to execute after 5 seconds
        let myFunction = function() {

            $img1.remove();
            getNextQuestion();

        };
        setTimeout(myFunction, 2000);

    }

    questionIndex++;
    scores();

});