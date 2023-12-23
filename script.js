const questions = [
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ]
    },
    {
        question: "Which scientist developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Stephen Hawking", correct: false },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false },
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Claude Monet", correct: false },
        ]
    },
    {
        question: "What is the currency of Australia?",
        answers: [
            { text: "Euro", correct: false },
            { text: "Dollar", correct: true },
            { text: "Yen", correct: false },
            { text: "Pound", correct: false },
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1943", correct: false },
            { text: "1945", correct: true },
            { text: "1947", correct: false },
            { text: "1950", correct: false },
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Lima", correct: false },
            { text: "Buenos Aires", correct: false },
            { text: "Rio de Janeiro", correct: false },
            { text: "Brasília", correct: true },
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "J.K. Rowling", correct: false },
            { text: "George Orwell", correct: false },
            { text: "Harper Lee", correct: true },
            { text: "J.D. Salinger", correct: false },
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Iron", correct: false },
        ]
    },
    {
        question: "What is the world's longest river?",
        answers: [
            { text: "Nile", correct: false },
            { text: "Amazon", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false },
        ]
    },
    {
        question: "Who is known as the 'Father of Computer Science'?",
        answers: [
            { text: "Alan Turing", correct: true },
            { text: "Bill Gates", correct: false },
            { text: "Steve Jobs", correct: false },
            { text: "Mark Zuckerberg", correct: false },
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Gobi Desert", correct: false },
            { text: "Antarctic polar desert", correct: true },
            { text: "Arabian Desert", correct: false },
        ]
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            { text: "Emily Brontë", correct: false },
            { text: "Charlotte Brontë", correct: false },
            { text: "Jane Austen", correct: true },
            { text: "Charles Dickens", correct: false },
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
        ]
    },
    {
        question: "Which continent is known as the 'Land of the Rising Sun'?",
        answers: [
            { text: "Japan", correct: true },
            { text: "Africa", correct: false },
            { text: "Europe", correct: false },
            { text: "Australia", correct: false },
        ]
    },
    {
        question: "In what year did the Titanic sink?",
        answers: [
            { text: "1905", correct: false },
            { text: "1912", correct: true },
            { text: "1920", correct: false },
            { text: "1931", correct: false },
        ]
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "J.D. Salinger", correct: false },
            { text: "Harper Lee", correct: false },
        ]
    },
    {
        question: "What is the largest mammal on Earth?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Hippopotamus", correct: false },
        ]
    },
    {
        question: "Who painted 'Starry Night'?",
        answers: [
            { text: "Vincent van Gogh", correct: true },
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: false },
            { text: "Claude Monet", correct: false },
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    //this function will set the score to 0 and show first question
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();//when ever new question shows up it removes the options for the previous ones
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + " . " + currentQuestion.question;
    //for showing the options
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        // Check if the 'correct' property of the 'answer' object is truthy
        if (answer.correct) {
            // If 'correct' is true, set a custom data attribute named 'correct' on the 'button' element
            // This is a way to associate information about the correctness of the answer with the button
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectButton = e.target;
    const isCorrect = selectButton.dataset.correct === "true";
    //the below code marks the correct option as green and incorrect option as red if clicked the incorrect one
    if (isCorrect) {
        selectButton.classList.add("correct");
        score++;
    }
    else {
        selectButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true")
            button.classList.add("correct");
        button.disabled = "true";//after an option is selected this makes all of them unclickable
    });
    nextButton.style.display = "block";//since an option is selected now you can move to next
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextQuestion();
    }
    else {
        startGame();
    }
});

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startGame();
