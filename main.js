// Toggle Sidebar Visibility
const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('sidebar-toggle');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});

// Sample Quiz Data
const quizzes = {
    python: [
        {
            question: "What is the output of `print(2 + 2)`?",
            options: ["2", "4", "6", "8"],
            answer: "B"
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["func", "def", "function", "define"],
            answer: "B"
        }
    ],
    javascript: [
        {
            question: "What is the output of `console.log(3 + 3)`?",
            options: ["6", "9", "12", "3"],
            answer: "A"
        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: ["var", "let", "const", "all of the above"],
            answer: "D"
        }
    ],
    CSS: [
        {
            question: "What is the output of `print(2 + 2)`?",
            options: ["2", "4", "6", "8"],
            answer: "B"
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["func", "def", "function", "define"],
            answer: "B"
        }
    ],
    HTML: [
        {
            question: "What is the output of `print(2 + 2)`?",
            options: ["2", "4", "6", "8"],
            answer: "B"
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["func", "def", "function", "define"],
            answer: "B"
        }
    ]
};

let currentLanguage = "python";
let currentQuestionIndex = 0;

// DOM Elements
const quizTitle = document.getElementById("quiz-title");
const questionText = document.getElementById("question-text");
const optionsContainer = document.querySelector(".options");
const questionCounter = document.getElementById("question-counter");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Load Quiz Questions
function loadQuiz() {
    const quiz = quizzes[currentLanguage];
    const question = quiz[currentQuestionIndex];

    quizTitle.textContent = `${currentLanguage.toUpperCase()} Quiz`;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = question.options
        .map((option, index) => `
            <label>
                <input type="radio" name="answer" value="${String.fromCharCode(65 + index)}">
                ${option}
            </label>
        `)
        .join("");
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quiz.length}`;
}

// Change Language
document.querySelectorAll(".language-btn").forEach(button => {
    button.addEventListener('click', () => {
        currentLanguage = button.getAttribute("data-language");
        currentQuestionIndex = 0;
        loadQuiz();
    });
});

// Navigate Questions
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuiz();
    }
});

nextBtn.addEventListener('click', () => {
    const quiz = quizzes[currentLanguage];
    if (currentQuestionIndex < quiz.length - 1) {
        currentQuestionIndex++;
        loadQuiz();
    }
});

// Initial Load
loadQuiz();


