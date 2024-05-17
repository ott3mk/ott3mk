// List of questions with their corresponding options and correct answers
const questions = [
    { tag: 'abdelbar', options: ['imen', 'maria', 'nada', 'zineb'], correct: 2 },
    { tag: '<h1>', options: ['</h2>', '</h3>', '</h1>', '</h4>'], correct: 2 },
    { tag: '<div>', options: ['</div>', '</p>', '</span>', '</a>'], correct: 0 },
    { tag: '<ul>', options: ['</li>', '</ol>', '</ul>', '</li>'], correct: 2 },
    { tag: '<a>', options: ['</button>', '</link>', '</a>', '</href>'], correct: 2 }
];

let currentQuestionIndex = 0;

// Load the current question and options
function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = `ckon y7b ${question.tag}?`;

    const buttons = document.getElementsByClassName('answer-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].textContent = question.options[i];
    }

    document.getElementById('result').textContent = '';
}

// Check the selected answer
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');

    if (selectedIndex === question.correct) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `ghalt ${question.options[question.correct]}  `;
        resultElement.style.color = 'red';
    }

    // Move to the next question after a delay
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    setTimeout(loadQuestion, 1000);
}

// Initialize the first question on page load
window.onload = loadQuestion;
