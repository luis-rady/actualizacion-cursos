const validateAnswers = (preguntas) => {
    const answers = [1, 1, 1, 1, 1, 2, 2, [4, 5], 3, 3, 3, 4]
    const li = document.getElementById("preguntas").getElementsByTagName("li");
    for(let i = 0 ; i < preguntas.length ; i++) {
        if( i == 7 ) {
            if(preguntas[i].value == answers[i][0] || preguntas[i].value == answers[i][1]) {
                li[i].classList.add("correct")
            } else {
                li[i].classList.add("incorrect");
            }
        } else if(preguntas[i].value == answers[i]){
            li[i].classList.add("correct")
        } else {
            li[i].classList.add("incorrect");
        }
    }
}

const allAnswered = (ev) => {
    ev.preventDefault();
    removeColors();
    const preguntas = document.getElementsByName("costos");
    for(let i = 0 ; i < preguntas.length ; i++) {
        if(preguntas[i].value == "none"){
            alert("Por favor conteste todas las preguntas");
            return;
        }
    }
    validateAnswers(preguntas);
}

const watchForm = () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", allAnswered);
}

const removeColors = () => {
    const li = document.getElementById("preguntas").getElementsByTagName("li");
    for(let i = 0 ; i < li.length ; i++) {
        li[i].classList.remove("correct");
        li[i].classList.remove("incorrect");
    }
}

const init = () => {
    watchForm();
}

init();