let form = document.getElementById("form");
let button = document.getElementById("submit");
let checkboxArr = document.getElementsByClassName("inputs");
let len = checkboxArr.length;
let textarea = document.getElementById("textarea");

form.addEventListener("submit", ev => {
    ev.preventDefault();
});

button.addEventListener("click", validate);

function validate() {
    let checked = false;
    let bTextArea = true;
    for (let i = 0 ; i < len ; i++) {
        if(checkboxArr[i].checked) {
            checked = true;
            break;
        }
    }
    if (textarea.value.trim() == '') { 
        bTextArea = false
    }

    if(!checked && !bTextArea){
        alert("Por favor responda las dos preguntas.");
    } else if (!checked){
        alert("Por favor responda la primera pregunta.");
    } else if (!bTextArea) {
        alert("Por favor responda la segunda pregunta.");
    } else {
        document.querySelector(".hide").classList.remove("hide")
        document.getElementById("answer").scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}