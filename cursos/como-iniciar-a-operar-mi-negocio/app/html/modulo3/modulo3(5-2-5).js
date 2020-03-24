let form = document.getElementById("form");
let submit = document.getElementById("submit");

form.addEventListener("submit", ev => {
    ev.preventDefault();
});

submit.addEventListener("click", validate);

function validate() {
    let p1 = form["options-p1"];
    let p2 = form["options-p2"];
    let p3 = form["options-p3"];

    if(p1.value == "equilibrio") {
        document.getElementById("p1None").classList.add("hide");
        document.getElementById("p1Incorrecto").classList.add("hide");
        document.getElementById("p1Correcto").classList.remove("hide");
    } else if(p1.value == "none") {
        document.getElementById("p1Incorrecto").classList.add("hide");
        document.getElementById("p1Correcto").classList.add("hide");
        document.getElementById("p1None").classList.remove("hide");
    } else {
        document.getElementById("p1None").classList.add("hide");
        document.getElementById("p1Correcto").classList.add("hide");
        document.getElementById("p1Incorrecto").classList.remove("hide");
    }

    if(p2.value == "utilidad") {
        document.getElementById("p2None").classList.add("hide");
        document.getElementById("p2Incorrecto").classList.add("hide");
        document.getElementById("p2Correcto").classList.remove("hide");
    } else if(p2.value == "none") {
        document.getElementById("p2Incorrecto").classList.add("hide");
        document.getElementById("p2Correcto").classList.add("hide");
        document.getElementById("p2None").classList.remove("hide");
    } else {
        document.getElementById("p2None").classList.add("hide");
        document.getElementById("p2Correcto").classList.add("hide");
        document.getElementById("p2Incorrecto").classList.remove("hide");
    }

    if(p3.value == "perdida") {
        document.getElementById("p3None").classList.add("hide");
        document.getElementById("p3Incorrecto").classList.add("hide");
        document.getElementById("p3Correcto").classList.remove("hide");
    } else if(p3.value == "none") {
        document.getElementById("p3Incorrecto").classList.add("hide");
        document.getElementById("p3Correcto").classList.add("hide");
        document.getElementById("p3None").classList.remove("hide");
    } else {
        document.getElementById("p3None").classList.add("hide");
        document.getElementById("p3Correcto").classList.add("hide");
        document.getElementById("p3Incorrecto").classList.remove("hide");
    }
}