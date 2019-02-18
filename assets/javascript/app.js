// * You'll create a trivia game that shows only one question until the player answers it or their time runs out.

var questions = [
    {
        question: "What house at Hogwarts does Harry belong to?",
        choice1: "Hufflepuff",
        choice2: "Gryffindoor",
        choice3: "Slytherin",
        choice4: "Ravenclaw",
        correct: "2"
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        choice1: "Chaser",
        choice2: "Keeper",
        choice3: "Bludger",
        choice4: "Seeker",
        correct: "4"
    },
    {
        question: "Who is Fluffy?",
        choice1: "A 3-headed dog",
        choice2: "Harry's owl",
        choice3: "Hermione's cat",
        choice4: "Hagrid's dragon",
        correct: "1"
    },
    {
        question: "Who kills Professor Dumbledore?",
        choice1: "Draco Malfoy",
        choice2: "Severus Snape",
        choice3: "Bellatrix Lestrange",
        choice4: "Sirius Black",
        correct: "2"
    },
    {
        question: "Who is Grawp?",
        choice1: "Ron's rat",
        choice2: "A Centaur",
        choice3: "Hagrid's brother",
        choice4: "The Malfoys' house elf",
        correct: "3"
    },
    {
        question: "How did Hermione take extra lessons her third year?",
        choice1: "The pensive",
        choice2: "Night classes",
        choice3: "She cloned herself",
        choice4: "A time-turner",
        correct: "4"
    },
    {
        question: "According to the Sorting Hat, what qualities does Ravenclaw possess?",
        choice1: "Daring and Nerve",
        choice2: "Patience and Loyalty",
        choice3: "Cunning and Deceit",
        choice4: "Wit and Learning",
        correct: "4"
    },
    {
        question: "What is Harry's Patronus?",
        choice1: "A Stag",
        choice2: "An Owl",
        choice3: "A Unicorn",
        choice4: "A Doe",
        correct: "1"
    },
    {
        question: "Which is not a method of transport for wizards?",
        choice1: "Floo powder",
        choice2: "Apparation",
        choice3: "Aparecium",
        choice4: "A portkey",
        correct: "3"
    },
    {
        question: "Who dies in the third Tri-Wizard Tournament task?",
        choice1: "Viktor Crum",
        choice2: "Cedric Diggory",
        choice3: "Fleur Delacour",
        choice4: "Madame Maxime",
        correct: "2"
    },
]



// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. 
// After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. 
// Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. 
// Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, 
// and an option to restart the game (without reloading the page).
