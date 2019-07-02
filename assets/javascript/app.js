var card = $("#quiz-area");
var countStartNumber = 15;
var timer;

// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// make 10 questions and answers in an object - done
var questions = [
    {
        question: "What house at Hogwarts does Harry belong to?",
        answers: ["Hufflepuff", "Gryffindoor", "Slytherin", "Ravenclaw"],
        correct: "Gryffindoor"
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        answers: ["Chaser", "Keeper", "Bludger", "Seeker"],
        correct: "Seeker"
    },
    {
        question: "Who is Fluffy?",
        answers: ["A 3-headed dog", "Harry's owl", "Hermione's cat", "Hagrid's dragon"],
        correct: "A 3-headed dog"
    },
    {
        question: "Who kills Professor Dumbledore?",
        answers: ["Draco Malfoy", "Severus Snape", "Bellatrix Lestrange", "Sirius Black"],
        correct: "Severus Snape"
    },
    {
        question: "Who is Grawp?",
        answers: ["Ron's rat", "A Centaur", "Hagrids brother", "The Malfoys' house elf"],
        correct: "Hagrids brother"
    },
    {
        question: "How did Hermione take extra lessons her third year?",
        answers: ["The pensive", "Night classes", "She cloned herself", "A time-turner"],
        correct: "A time-turner"
    },
    {
        question: "According to the Sorting Hat, what qualities does Ravenclaw possess?",
        answers: ["Daring and Nerve", "Patience and Loyalty", "Cunning and Deceit", "Wit and Learning"],
        correct: "Wit and Learning"
    },
    {
        question: "What is Harry's Patronus?",
        answers: ["A Stag", "An Owl", "A Unicorn", "A Doe"],
        correct: "A Stag"
    },
    {
        question: "Which is not a method of transport for wizards?",
        answers: ["Floo powder", "Apparation", "Aparecium", "A portkey"],
        correct: "Aparecium"
    },
    {
        question: "Who dies in the third Tri-Wizard Tournament task?",
        answers: ["Viktor Crum", "Cedric Diggory", "Fleur Delacour", "Madame Maxime"],
        correct: "Cedric Diggory"
    },
]

var game = {

    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        game.counter--;
        $("#counter-number").text(game.counter);
        if (game.counter === 0) {
            console.log("TIME'S UP");
            game.timeUp();
        }
    },

    loadQuestion: function () {

        timer = setInterval(game.countdown, 1000);

        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            card.append("<button class='btn btn-secondary btn-lg btn-block answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
                + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function () {
        game.counter = countStartNumber;
        $("#counter-number").text(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },

    timeUp: function () {

        clearInterval(timer);

        $("#counter-number").html(game.counter);

        card.html("<h2>Out of Time!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correct);
        card.append("<img class='img-fluid' src='assets/images/timesup.jpg' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    results: function () {

        clearInterval(timer);

        card.html("");

        $("#counter-number").text(game.counter);
        card.append("<img class='img-fluid' src='assets/images/end.jpg'/>")
        card.append("<h3>Correct Answers: " + game.correct + "</h3>");
        card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
        card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
        card.append("<br><button class='btn btn-lg btn-secondary btn-block' id='start-over'>Start Over?</button>");
    },

    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).attr("data-name") === questions[this.currentQuestion].correct) {
            this.answeredCorrectly();
        }
        else {
            this.answeredIncorrectly();
        }
    },

    answeredIncorrectly: function () {

        game.incorrect++;

        clearInterval(timer);

        card.html("<h2>Wrong!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].correct + "</h3>");
        card.append("<img class= 'img-fluid' src='assets/images/incorrect.jpg' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    answeredCorrectly: function () {

        clearInterval(timer);

        game.correct++;

        card.html("<h2>Correct!</h2>");
        card.append("<img class='img-fluid' src='assets/images/correct.jpg' />");

        if (game.currentQuestion === questions.length - 1) {
            setTimeout(game.results, 3 * 1000);
        }
        else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },

    reset: function () {
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};

// CLICK EVENTS

$(document).on("click", "#start-over", function () {
    game.reset();
});

$(document).on("click", ".answer-button", function (e) {
    game.clicked(e);
});

$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<div class='modal-header text-light text-left'><h2>Time Remaining: <span id='counter-number'>15</span> Seconds</h2></div>");
    game.loadQuestion();
});

