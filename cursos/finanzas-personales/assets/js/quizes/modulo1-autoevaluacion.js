let numPreguntas = $(".form-group").length;

$("#evaluar").click( _ => {
    let answers = $("input[type='radio']:checked");
    if(answers.length === numPreguntas) {
        $(".hidden").removeClass("hidden")
    } else {
        alert("Es necesario responder todas las preguntas.")
    }
});
