const quizData = [
    {
        question: "ماهو اطول جسر بحري في العالم؟",
        a: "جسر حوض أتشافالايا",
        b: "جسر الملك فهد الجسر الأول",
        c: "جسر الملك فهد الذي يصل السعوديه بالبحرين طوله .",
        d: "جسر السلطان عبد الحليم معظم شاه",
        correct: "c",
    },
    {
        question: ":في اي مدينة تقع ساعة بيج بين الشهيرة؟",
        a: "مانشستر",
        b: "لندن ",
        c: "ليفربول",
        d: "بيرمينغهام",
        correct: "b",
    },
    {
        question: "الي ماذا يشير مصطلح الذهب الاسود؟",
        a: "البترول",
        b: "",
        b: "الفسفاط",
        c: "الفخم",
        d: "الغاز",
        correct: "a",
    },
    {
        question: "من بين الكائنات البحرية صنف العلماء احداها بالأكثر ذكاءاً",
        a: "اانعام",
        b: "الدولفين",
        c: "االاخطبوط",
        d: "القرش",
        correct: "b",
    },
    {
        question: "اين صنعت أول كسوة للكعبة؟",
        a: "اامغرب ",
        b: "مصر",
        c: "فلسطين",
        d: " العراق ",
        correct: "b",
    },
    {
        question: ":إلى ماذا يشير علم الأنثروبولوجي?",
        a: "علم دراسة اجتماعية بيئية",
        b: "علم دراسة الارض",
        c: " علم دراسة الاجناس",
        d: "دراسات العلوم والتكنولوجيا",
        correct: "c",
    },
    {
        question: "مااسم الديانه الاكثر شيوعا في الهند",
        a: "الهندوسيه",
        b: "الإسلام ",
        c: " السيخية ",
        d: " بوذية",
        correct: "a",
    },
    {
        question: "كم قلب للاخطبوط ؟",
        a: "1",
        b: "5",
        c: "3",
        d: "16",
        correct: "c",
    },
    {
        question: "من أين ينبع نهر النيل",
        a: "اوغندا جنوب أفريقي  ",
        b: "زيمبابوي",
        c:  "مصر",
        d: " أنغولا",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});