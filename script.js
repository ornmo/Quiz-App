const quizData = [
    {
        question: "Which colours are in the flag of the United Nations?",
        a: "Black and white",
        b: "Green and blue",
        c: " Green and white",
        d: "Blue and white",
        correct: "d",
    },
    {
        question: "How many faces does a Dodecahedron have?",
        a: "10",
        b: "12",
        c: "14",
        d: "16",
        correct: "b",
    },
    {
        question: "Which language has the most native speakers worldwide?",
        a: "Portuguese",
        b: "English",
        c: "Spanish",
        d: "French",
        correct: "c",
    },
    {
        question: "Which country drinks the most coffee?",
        a: "Brazil",
        b: "China",
        c: "Finland",
        d: "United States",
        correct: "c",
    },
    {
        question: "How many bones does an ear have?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "a",
    },
    {
        question: "How many films have Al Pacino and Robert De Niro appeared in together?",
        a: "Two",
        b: "Four",
        c: "Six",
        d: "Eight",
        correct: "b",
    },
    {
        question: "What is a group of crows called?",
        a: "A school",
        b: "A gang",
        c: "A murder",
        d: "A barrel",
        correct: "c",
    },
    {
        question: "How many consonants are in the English alaphabet?",
        a: "19",
        b: "20",
        c: "21",
        d: "22",
        correct: "c",
    },
    {
        question: "Which Disney Princess has friends called Gus and Jaq?",
        a: "Rapunzel",
        b: "Snow White",
        c: "Cinderella",
        d: "Belle",
        correct: "c",
    },
    {
        question: "What are the five colours of the Olympic rings?",
        a: "Red, blue, yellow, orange, green",
        b: "Blue, yellow, black, green and red",
        c: "Green, blue, white, yellow, red",
        d: "Red, blue, purple, green, yellow",
        correct: "b",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
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
}

function deselectAnswers() {
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

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
