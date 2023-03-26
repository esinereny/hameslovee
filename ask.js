{
    const quizData = [
        {
            question: "Tanıştığımız Gün ?",
            a: "09.04.21",
            b: "09.04.22",
            c: "11.04.21",
            d: "11.03.21",
            correct: "a",
        },
        {
            question: "İlk Buluştuğumuz Gün ?",
            a: "21.04.21",
            b: "21.05.21",
            c: "20.05.21",
            d: "20.04.21",
            correct: "c",
        },
        {
            question: "Sevgili olduğumuz tarih ?",
            a: "02.07.21",
            b: "08.06.21",
            c: "02.06.21",
            d: "01.06.21",
            correct: "c",
        },
        {
            question: "Galataya çıktığımız Tarih",
            a: "01.01.22",
            b: "02.06.21",
            c: "02.12.21",
            d: "01.12.21",
            correct: "c",
        },
    ];

    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");

    let currentQuiz = 0;
    let score = 0;

    const deselectAnswers = () => {
        answerElements.forEach((answer) => (answer.checked = false));
    };

    const getSelected = () => {
        let answer;
        answerElements.forEach((answerElement) => {
            if (answerElement.checked) answer = answerElement.id;
        });
        return answer;
    };

    const loadQuiz = () => {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    };
    loadQuiz();  

        submitButton.addEventListener("click", () => {  
            const answer = getSelected();  
            if (answer) {  
                if (answer === quizData[currentQuiz].correct) score++;  
                currentQuiz++;  
                if (currentQuiz < quizData.length) loadQuiz();  
                else {  
                    quiz.innerHTML = `  
                    <h2>${quizData.length} sorudan ${score} tanesini bildin.</h2>  
                    <button><a href="a_s_k.html" target="_blank"> Hepsini doğru bildin sayfamıza geçebirsin ömrüm.</a></button>  
                    ` 
                }  
            }  
        }); }