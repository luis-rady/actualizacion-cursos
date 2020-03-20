let form = document.getElementById("form");
let submit = document.getElementById("submit");
let answer = document.getElementById("answer");
form.addEventListener("submit", ev => {
    ev.preventDefault();
});

submit.addEventListener("click", validate);

function validate() {
    let radios = document.getElementsByName("opt");

    for(let i = 0 ; i < radios.length ; i++) {
        if (radios[i].checked) {
            if(radios[i].value == "3"){
                answer.innerHTML = "<div>Correcto</div>No necesariamente debe de asociarse con alguien. Tú decides si deseas trabajar sólo o con socio(s).";
                answer.classList.replace("alert-danger", "alert-success")
                answer.classList.remove("hide")
                document.getElementById("answer").scrollIntoView({ behavior: 'smooth', block: 'center' })
                return
            } else if (radios[i].value == "1") {
                answer.innerHTML = "<div>Incorrecto</div>El tener socios depende del negocio y de las habilidades que el dueño tenga para realizar todas las funciones que el negocio requiere, es decir, no siempre deberá asociarse con alguien. No existe un número definido de socios requeridos para iniciar un negocio.";
                answer.classList.add("alert-danger");
                answer.classList.remove("hide")
                answer.scrollIntoView({ behavior: 'smooth', block: 'center' })
                return
            } else if (radios[i].value == "2") {
                answer.innerHTML = "<div>Incorrecto</div>El tener socios depende del negocio y de las habilidades que el dueño tenga para realizar todas las funciones que el negocio requiere, es decir, no siempre deberá asociarse con alguien. No existe un número definido de socios requeridos para iniciar un negocio.";
                answer.classList.add("alert-danger");
                answer.classList.remove("hide")
                answer.scrollIntoView({ behavior: 'smooth', block: 'center' })
                return
            } else if(radios[i].value == "4") {
                answer.innerHTML = "<div>Incorrecto</div>Un socio puede ser un familiar, un amigo, un compadre, una comadre, o cualquier persona que desarrolle las actividades que complementen las actividades del dueño.";
                answer.classList.add("alert-danger");
                answer.classList.remove("hide")
                answer.scrollIntoView({ behavior: 'smooth', block: 'center' })
                return
            }
            break;
        }
    }
    alert("Debes seleccionar una opción")
}
