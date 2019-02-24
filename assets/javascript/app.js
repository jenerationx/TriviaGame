var right = 0;
var wrong = 0;
var outoftime = 0
var questionIndex = 0;
// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// make 10 questions and answers in an object - done
var questions = [
    {
        question: "What house at Hogwarts does Harry belong to?",
        choice1: "Hufflepuff",
        choice2: "Gryffindoor",
        choice3: "Slytherin",
        choice4: "Ravenclaw",
        correct: 2
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        choice1: "Chaser",
        choice2: "Keeper",
        choice3: "Bludger",
        choice4: "Seeker",
        correct: 4
    },
    {
        question: "Who is Fluffy?",
        choice1: "A 3-headed dog",
        choice2: "Harry's owl",
        choice3: "Hermione's cat",
        choice4: "Hagrid's dragon",
        correct: 1
    },
    {
        question: "Who kills Professor Dumbledore?",
        choice1: "Draco Malfoy",
        choice2: "Severus Snape",
        choice3: "Bellatrix Lestrange",
        choice4: "Sirius Black",
        correct: 2
    },
    {
        question: "Who is Grawp?",
        choice1: "Ron's rat",
        choice2: "A Centaur",
        choice3: "Hagrid's brother",
        choice4: "The Malfoys' house elf",
        correct: 3
    },
    {
        question: "How did Hermione take extra lessons her third year?",
        choice1: "The pensive",
        choice2: "Night classes",
        choice3: "She cloned herself",
        choice4: "A time-turner",
        correct: 4
    },
    {
        question: "According to the Sorting Hat, what qualities does Ravenclaw possess?",
        choice1: "Daring and Nerve",
        choice2: "Patience and Loyalty",
        choice3: "Cunning and Deceit",
        choice4: "Wit and Learning",
        correct: 4
    },
    {
        question: "What is Harry's Patronus?",
        choice1: "A Stag",
        choice2: "An Owl",
        choice3: "A Unicorn",
        choice4: "A Doe",
        correct: 1
    },
    {
        question: "Which is not a method of transport for wizards?",
        choice1: "Floo powder",
        choice2: "Apparation",
        choice3: "Aparecium",
        choice4: "A portkey",
        correct: 3
    },
    {
        question: "Who dies in the third Tri-Wizard Tournament task?",
        choice1: "Viktor Crum",
        choice2: "Cedric Diggory",
        choice3: "Fleur Delacour",
        choice4: "Madame Maxime",
        correct: 2
    },
]
var lastQuestionIndex = (questions.length - 1);

// click start button to begin-done
document.getElementById("start").onclick = function () { startGame() };
function startGame() {
    $("#start-container").hide();
    $("#game-container").show();
    $("#choices").show();
    $("#correct-answer").hide();
    $(".img-thumbnail").hide();
    intervalId = setInterval(questionTimer, 1000);
    startQuestions();
};
// display first question-done
function startQuestions() {
    timer = 16;
    questionTimer();
    // tell the html where to set content-done
    $("#question").text(questions[questionIndex].question);
    $("#choice1").text(questions[questionIndex].choice1);
    $("#choice2").text(questions[questionIndex].choice2);
    $("#choice3").text(questions[questionIndex].choice3);
    $("#choice4").text(questions[questionIndex].choice4);
};

// set a timer for 15 seconds, counting down-done
function questionTimer() {
    if (timer > 0) {
        timer--;
        $("#timer").html(timer);
    }
    else if (timer === 0) {
        guessTimeout();
        // if (questionIndex === questions.length) {
        //     showScore();
        // }
        // else {
        //     questionIndex++;
        // };
    }
};
function checkGuess(guess) {
    if (guess === questions[questionIndex].correct) {
        guessCorrect();
    }
    else {
        guessWrong();
        // console.log("incorrect!");
    };


}
// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
// After a few seconds, display the next question -- do this without user input.  - done  
// put Correct! in the question div and correct answer in the correct-answer id. Display appropriate image. set a 3 sec timeout, question index ++, startquestions - done

function guessCorrect() {
    clearInterval(intervalId);
    $("#choices").hide();
    $("#question").text("Correct!");
    right++;
    console.log("correct: " + right);
    $("#correct-img").show();
    setTimeout(startGame, 3000);
    questionIndex++;
    if (questionIndex > lastQuestionIndex) {
        clearInterval(intervalId);
        showScore();
    };
    // show the correct answer - done but needs improvement
    // show hermione pic - done

};

//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. 
// Wait a few seconds, then show the next question. - done
function guessWrong() {
    clearInterval(intervalId);
    $("#question").text("Wrong!");
    $("#choices").hide();
    $("#correct-answer").show();
    $("#correct-answer").text("The correct answer was Choice " + questions[questionIndex].correct);
    $("#incorrect-img").show();
    setTimeout(startGame, 3000);
    wrong++;
    console.log("incorrect: " + wrong);
    questionIndex++;
    if (questionIndex > lastQuestionIndex) {
        clearInterval(intervalId);
        showScore();
    };

    // put Wrong! in the question div and correct answer in the correct-answer id. Display appropriate image. set a 3 sec timeout, question index ++, startquestions
};
//   * If the player runs out of time, tell the player that time's up and display the correct answer. 
// Wait a few seconds, then show the next question. - done
function guessTimeout() {
    clearInterval(intervalId);
    $("#timer").html("Time's up!");
    $("#choices").hide();
    $("#correct-answer").show();
    $("#correct-answer").text("The correct answer was Choice " + questions[questionIndex].correct);
    $("#timesup-img").show();
    setTimeout(startGame, 3000);
    outoftime++;
    console.log("unanswered: " + outoftime);
    questionIndex++;
    if (questionIndex > lastQuestionIndex) {
        clearInterval(intervalId);
        showScore();
    };
};

function showScore() {
    clearInterval(intervalId);
    $("#question").hide();
    $("#choices").hide();
    $("#correct-answer").hide();
    $("#score").show();
    $("#gameover-img").show();
    $("#right").text("Correct answers: " + right);
    $("#wrong").text("Incorrect answers: " + wrong);
    $("#outoftime").text("Unanswered: " + outoftime);
    document.getElementById("start-over").onclick = function () { startGame() };


};   // * On the final screen, show the number of correct answers, incorrect answers,
    // and an option to restart the game (without reloading the page). if questionIndex === questions.length

