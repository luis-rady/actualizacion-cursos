
const allAnswered = () => {
    const p1 = document.getElementsByName("p1");
    const p2 = document.getElementsByName("p2");
    const s1 = document.getElementById("s1");
    const s2 = document.getElementById("s2");
    const s3 = document.getElementById("s3");
    const s4 = document.getElementById("s4");
    if(answered(p1) && answered(p2) && (s1.value != "none") && (s2.value != "none") && (s3.value != "none") && (s4.value != "none")) {
        if(validateP1(p1)) {
            const correct = document.getElementById("p1c");
            correct.classList.remove("hide");
        } else {
            const incorrect = document.getElementById("p1i");
            incorrect.classList.remove("hide");
        }
        if(validateP2(p2)) {
            const correct = document.getElementById("p2c");
            correct.classList.remove("hide");
        } else {
            const incorrect = document.getElementById("p2i");
            incorrect.classList.remove("hide");
        }
        validateP3();
    } else {
        alert("Por favor conteste todas las preguntas");
    }
}

const answered = (radios) => {
    for(let i = 0 ; i < radios.length ; i++) {
        if(radios[i].checked) {
            return true;
        }
    }
    return false;
}

const validateP1 = (radios) => {
    for(let i = 0 ; i < radios.length ; i++) {
        if(radios[i].checked) {
            if(radios[i] == radios[3]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

const validateP2 = (radios) => {
    for(let i = 0 ; i < radios.length ; i++) {
        if(radios[i].checked) {
            if(radios[i] == radios[1]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

const validateP3 = () => {
    if(s1.value == "4") {
        const ls1 = document.getElementById("ls1");
        ls1.classList.add("correct");
    } else {
        ls1.classList.add("incorrect");
    }
    if(s2.value == "2") {
        const ls2 = document.getElementById("ls2");
        ls2.classList.add("correct");
    } else {
        ls2.classList.add("incorrect");
    }
    if((s3.value == "1" && s4.value == "3") || (s3.value == "3" && s4.value == "1")) {
        const ls3 = document.getElementById("ls3");
        ls3.classList.add("correct");
    } else {
        ls3.classList.add("incorrect");
    }
}

const hideMessage = () => {
    const p1Correct = document.getElementById("p1c");
    const p1Incorrect = document.getElementById("p1i");
    const p2Correct = document.getElementById("p2c");
    const p2Incorrect = document.getElementById("p2i");
    p1Correct.classList.add("hide");
    p1Incorrect.classList.add("hide");
    p2Correct.classList.add("hide");
    p2Incorrect.classList.add("hide");
    ls1.classList.remove("correct");
    ls1.classList.remove("incorrect");
    ls2.classList.remove("correct");
    ls2.classList.remove("incorrect");
    ls3.classList.remove("correct");
    ls3.classList.remove("incorrect");
}

const validate = (ev) => {
    ev.preventDefault();
    hideMessage();
    allAnswered();
}

const watchForm = () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", validate);
}

const init = () => {
    watchForm();
}

init()