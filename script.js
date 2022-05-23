const quizData = [
    {
        question: "What colours is the flag of the United Nations?",
        a: "Black and white",
        b: "Green and blue",
        c: " Green and white",
        d: "Blue and white",
        correct: "Blue and white",
    },
    {
        question: "How many faces does a Dodecahedron have?",
        a: "10",
        b: "12",
        c: "14",
        d: "16",
        correct: "12",
    },
    {
        question: "Which language has the more native speakers?",
        a: "Portuguese",
        b: "English",
        c: "Spanish",
        d: "French",
        correct: "Spanish",
    },
    {
        question: "What country drinks the most coffee?",
        a: "Brazil",
        b: "China",
        c: "Finland",
        d: "United States",
        correct: "",
    },
    // {
    //     question: "How many bones do we have in an ear?",
    //     a: "3",
    //     b: "4",
    //     c: "5",
    //     d: "6",
    //     correct: "3",
    // },
    // {
    //     question: "How many films have Al Pacino and Robert De Niro appeared in together?",
    //     a: "Two",
    //     b: "Four",
    //     c: "Six",
    //     d: "Eight",
    //     correct: "Four",
    // },
    // {
    //     question: "What is a group of crows called?",
    //     a: "A school",
    //     b: "A gang",
    //     c: "A murder",
    //     d: "A barrel",
    //     correct: "A murder",
    // },
    // {
    //     question: "What's longer, a nautical mile or a mile?",
    //     a: "Nautical mile",
    //     b: "Mile",
    //     correct: "Nautical mile",
    // },
    // {
    //     question: "Which Disney Princess called Gus and Jaq friends?",
    //     a: "Rapunzel",
    //     b: "Snow White",
    //     c: "Cinderella",
    //     d: "Belle",
    //     correct: "Cinderella",
    // },
    // {
    //     question: "What are the five colours of the Olympic rings?",
    //     a: "Red, blue, yellow, orange, green",
    //     b: "Blue, yellow, black, green and red",
    //     c: "Green, blue, white, yellow, red",
    //     d: "Red, blue, purple, green, yellow",
    //     correct: "Blue, yellow, black, green and red",
    // },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a__text')
const b_text = document.getElementById('b__text')
const c_text = document.getElementById('c__text')
const d_text = document.getElementById('d__text')
// const e_text = document.getElementById('e__text')
// const f_text = document.getElementById('f__text')
// const g_text = document.getElementById('g__text')
// const h_text = document.getElementById('h__text')
// const i_text = document.getElementById('i__text')
// const j_text = document.getElementById('j__text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    // e_text.innerText = currentQuizData.e
    // f_text.innerText = currentQuizData.f
    // g_text.innerText = currentQuizData.g
    // h_text.innerText = currentQuizData.h
    // i_text.innerText = currentQuizData.i
    // j_text.innerText = currentQuizData.j
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz
        } else {
            quiz.innerHTML = `
            <h2> You answered ${score}/${quizData.length} questions correclty!</h2>
            <button onclick="location.reload()">Relaod</button>
            `
        }
    }
})

function  deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}
