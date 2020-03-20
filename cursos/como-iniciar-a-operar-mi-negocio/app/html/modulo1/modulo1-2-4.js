let form  = document.getElementById("form");
let submit = document.getElementById("submit");

form.addEventListener("submit", ev => {
    ev.preventDefault();
});

submit.addEventListener("click", validate);

function validate() {
    // Validar nombre de negocios
    let negocios = document.getElementsByClassName("negocio");
    let bNegocios = true;
    for (let i = 0 ; i < negocios.length ; i++) {
        if(negocios[i].value.trim() == "") {
            bNegocios = false;
            break;
        }
    }
    if(!bNegocios) {
        alert("Por favor ingrese el nombre de los negocios")
        return
    }

    // Validar radio buttons
    let mejorCalidad = form["mejor-calidad"];
    if(!checkRadio(mejorCalidad)) {
        alert("Por favor seleccione que opción es mejor")
        return;
    }

    let mejorPrecio = form["mejor-precio"];
    if(!checkRadio(mejorPrecio)) {
        alert("Por favor seleccione que opción es mejor")
        return;
    }

    let mejorUbicacion = form["mejor-ubicacion"];
    if(!checkRadio(mejorUbicacion)) {
        alert("Por favor seleccione que opción es mejor")
        return
    }

    let atiendenMejor = form["atienden-mejor"];
    if(!checkRadio(atiendenMejor)) {
        alert("Por favor seleccione que opción es mejor")
        return
    }

    let sonRapidos = form["son-rapidos"];
    if(!checkRadio(sonRapidos)) {
        alert("Por favor seleccione que opción es mejor")
        return
    }

    let elDueno = form["el-dueno"];
    if(!checkRadio(elDueno)) {
        alert("Por favor seleccione que opción es mejor")
        return
    }

    let negocioSeleccionado = document.getElementById("negocioSeleccionado")
    if(negocioSeleccionado.value.trim() == "") {
        alert("Para avanzar es necesario que indiques que negocio seleccionaste y por qué")
        return
    }
    document.querySelector(".hide").classList.remove("hide")
    document.getElementById("answer").scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function checkRadio(radio) {
    for(i = 0 ; i < radio.length ; i++) {
        if(radio[i].checked) {
            return true;
        }
    }
    return false;
}