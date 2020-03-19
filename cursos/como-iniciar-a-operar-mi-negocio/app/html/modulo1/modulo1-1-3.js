function validateForm() {
    var opt1 = document.forms["preguntaCasoClara"]["opt_1"].checked;
    var opt2 = document.forms["preguntaCasoClara"]["opt_2"].checked;
    var opt3 = document.forms["preguntaCasoClara"]["opt_3"].checked;
    var opt4 = document.forms["preguntaCasoClara"]["opt_4"].checked;
    if(opt1 && opt4 && !opt2 && !opt3) {
        alert("Correcto\nCon base en el gusto de Clara por cocinar y a las necesidades de su colonia, Cocinar comida rápida y hacer pasteles infantiles pueden ser algunas ideas de negocio.");
    }
    else if(!opt1 && !opt4 && !opt2 && !opt3){
        alert("Por favor seleccione al menos una opción.");
    }
    else {
        alert("Incorrecto\nLa respuesta correcta es cocinar comida rápida y hacer pasteles infantiles. Debido al gusto de Clara por cocinar y a las necesidades de su colonia.");
    }
    return false;
}