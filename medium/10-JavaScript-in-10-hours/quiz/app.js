const quizData = [
    {
        question: "How old id Florin?",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c",
    },
    {
        question: "What is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What is the most ued programing language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What is developer skill?",
        a: "html",
        b: "css",
        c: "javascript",
        d: "c++",
        correct: "d",
    },
];


const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;
let score = 0;

// Initial
loadQuiz();

function loadQuiz() {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deSelectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}



submitBtn.addEventListener('click',() => {
    
    //check to see answer
    const answer = getSelected();


    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz< quizData.length){
            loadQuiz();
        }else{
            // TODO: show results
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions </h2>
            
            <button onclick="location.reload()">Reload qeustions</button>
            `
        }
    }

})