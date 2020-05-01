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
    $(".score > span").html(parseInt(correct * 100 / count) + "/100");
    if (parseInt(correct * 100 / count) > 70) {
        $(".msg > span").html("Aprobado!!");
    } else {
        $(".msg > span").html("Reprobado!!");
    }
}