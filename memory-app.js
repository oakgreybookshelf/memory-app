{
    configurations: [
      {
        preLaunchTask: pnpm run dev,
      },
    ]
  }

document.addEventListener('DOMContentLoaded', () => {
    questions.classList.add('hide');
}) //hide next button on first page

const nextButton = document.getElementById('next-btn');
const boxContainerElement = document.getElementById('box-container');
const boxElement = document.getElementById('box');

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});




function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions [currentQuestionIndex]);
}

function resetState () {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild);
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => selectAnswer(button));
        answerButtonsElement.appendChild(button);
    });
}

setTimeout(() => {
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        concludeQuiz();
    }
}, 1000);


element.classList.remove('wrong');


function concludeQuiz() {
    questionContainerElement.classList.add('hide');
    nextButton.classList.add('hide');

    resultsElement.classList.remove('hide');
    resultsElement.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${shuffledQuestions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
    `;
    quizAppElement.appendChild(resultsElement);
}

function restartQuiz() {
    resultsElement.classList.add('hide');
    score = 0;
    currentQuestionIndex = 0;
    startGame();
}
