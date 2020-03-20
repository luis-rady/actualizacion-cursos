let form = document.getElementById("form");
let submit = document.getElementById("submit");
let compEmprendedor = document.getElementsByName("emprendedor");
let compProducto = document.getElementsByName("producto");
let answer = document.getElementById("answer");

form.addEventListener("submit", ev => {
    ev.preventDefault();
});

submit.addEventListener("click", validate);

function validate() {
    if(!oneIsChecked(compEmprendedor) && !oneIsChecked(compProducto)){
        alert("Por favor conteste las dos preguntas");
        return
    } else if(!oneIsChecked(compProducto)) {
        alert("Por favor conteste las competencias relacionadas con el producto");
        return
    } else if(!oneIsChecked(compEmprendedor)) {
        alert("Por favor conteste las competencias del emprendedor");
        return
    }
    answer.classList.remove("hide")
    answer.scrollIntoView({ behavior: "smooth", block: "center"})

}

function oneIsChecked(input) {
    for(let i = 0 ; i < input.length ; i++) {
        if(input[i].checked) {
           return true 
        }
    }
    return false
}