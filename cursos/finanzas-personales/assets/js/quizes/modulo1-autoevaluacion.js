let numPreguntas = $(".form-group").length;

$("#evaluar").click( _ => {
    $("div.col-11 > span").addClass("hidden");
    let answers = $("input[type='radio']:checked");
    if(answers.length === numPreguntas) {
        answers.parent().parent().find("span.hidden").removeClass("hidden");
    } else {
        alert("Es necesario responder todas las preguntas.")
    }
});
