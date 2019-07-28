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

let correctGuess;
let wrongGuess;
let countdown = 10;
let questionIndex = 0;
let handle;
let imgHandle;
let timerCount;
let answerPick = false;

let trueBtn = $("<button>true</button>").addClass("btn btn-primary true-false");
let falseBtn = $("<button>false</button>").addClass("btn btn-primary true-false");

function getNextQuestion() {

    answerPick = true;
    
    if ( handle ) {

        clearTimeout( handle );
        
    }
    
    handle = setTimeout( getNextQuestion, 10000 );
    
    $("#quizQuestion").html( questions[questionIndex].q );
    $("#quizQuestion").append( trueBtn );
    $("#quizQuestion").append( falseBtn );
    
    
    // if ( questionIndex > 4 ) {
        //     console.log("stop");
        //     clearTimeout( handle );
        // }
        
        // timerCount = setTimeout(timer, 1000);
    timer();
        
}

// function trueButton() {

//     if ( answerPick ) {

//         if ( questions[0, 1, 4] ) {

//             console.log("You're correct!");
            
//         } 
//         // else if ( questionIndex === 2 || questionIndex === 3 ) {
            
//         //     console.log("You're wrong!");
            
//         // }
//         else console.log("YOur wrong");
//         answerPick = false;
// }

// }

// function falseButton() {

//     if ( answerPick ) {

//         if ( questions[2, 3] ) {

//             console.log("You're correct!");
            
//         } 
//         // else if ( questionIndex === 0 || questionIndex === 1 || questionIndex === 4 ) {
            
//         //     console.log("You're wrong!");
            
//         // }
//         else console.log("YOur wrong");
//         answerPick = false;

// }

// }

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
        
        wrongGuess++;
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

}

$(document).on("click", "#startBtn" , function(event) {
    
    getNextQuestion();
    
});

$(document).on("click", ".true-false" , function(event) {

    // $(this).data('clicked', true);
    
    if ( this.textContent === questions[questionIndex].a ) {
        console.log("right");
        correctGuess++;
        countdown = 10;
        clearTimeout( timerCount );
        setTimeout( getNextQuestion, 3000 );
    } else {
        console.log("wrong");
        wrongGuess++;
        countdown = 10;
        clearTimeout( timerCount );
        setTimeout( getNextQuestion, 3000 );
    }
    questionIndex++;
    console.log(questionIndex);
    
});

// $(document).on("click", ".false" , function(event) {
    
//     // trueButton();
//     // falseButton();
//     if ( $(".false").text() === questions[questionIndex].a ) {
//         console.log("right");
//     } else {
//         console.log("wrong");
//     }
    
// });