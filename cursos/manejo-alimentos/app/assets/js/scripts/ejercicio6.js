$(".custom-control-label").on("click", function () {
    if ($(this).siblings().is(":checked")) {
        $(this).siblings().removeAttr("checked");

    } else {
        $(this).siblings().prop("checked", true);

    }
});
//radio input "Correct" Class
function checkAll() {
    var correct = 0;
    var count = 0;
    $("li.question").each(function () {
        count++;
        var elem = $(this);
        $(this).find(".alertCorrect").css("display", "none");
        $(this).find(".alertWrong").css("display", "none");
        var isCorrect = true;
        $(this).find("input.custom-control-input").each(function () {
            if ($(this).hasClass("correct")) {
                if (!$(this).is(":checked")) {
                    isCorrect = false;
                }
            } else {
                if ($(this).is(":checked")) {
                    isCorrect = false;
                }
            }
        });
        if (isCorrect == true) {
            correct++;
            $(this).find(".alertCorrect").css("display", "block");
        } else {
            $(this).find(".alertWrong").css("display", "block");
        }
    });
    $(".score > span").html("<p style=\"color:gray\"><b>Resultado: "+parseInt(correct*100/count)+"/100</b></p>");
    if(parseInt(correct*100/count) >= 90){
        $(".msg > span").html("<p style=\"color:green\"><b>¡Excelente!</b></p>");
    }else if(parseInt(correct*100/count) <= 30){
        $(".msg > span").html('<p style=\"color:red\"><b>Te invitamos a regresar al contenido para tu aprendizaje.</b></p>');
    }
}
