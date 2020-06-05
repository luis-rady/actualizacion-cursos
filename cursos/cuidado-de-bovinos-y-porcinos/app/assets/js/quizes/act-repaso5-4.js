function correct(a, b) {
    var strUser = a.options[a.selectedIndex].value;
    if (b == strUser) {
        a.style.borderColor = "#11CC22";
    }
    else {
        a.style.borderColor = "red";
    }
}

var cons = ["5", "2", "3", "1", "4"];
var cont;
function funonclick() {
    var acert = 0;
    for (cont = 0; cont < cons.length; cont++) {
        if (document.getElementById("r0" + (cont + 1)).value == cons[cont]) {
            acert++;
            document.getElementById("r0" + (cont + 1)).style.color = "#11CC22"
        }
        else {
            document.getElementById("r0" + (cont + 1)).style.color = "red"
        }
    }
    if (acert < 5) {
        document.getElementById("geeks").innerHTML =
            "Acertó " + acert + " de 5, intente de nuevo";

    }
    else {
        document.getElementById("geeks").innerHTML =
            "¡Excelente! Todo está correcto";
    }
}

$(document).ready(function () {
    //close all the content divs on page load
    $('.response').hide();

    // toggle slide
    $('.selection').click(function () {
        // by calling sibling, we can use same div for all demos
        $(this).siblings('.response').slideToggle('fast');
    });

    $('button').click(function (event) {
        var $target = $(event.target);
        var $checkboxes = $target.parent('.mcq').find('input');
        for (var i = 0; i < $checkboxes.length; i++) {
            var $checkbox = $checkboxes.eq(i);
            a = $checkbox;
            if ($checkbox[0].checked && $checkbox.nextAll('.response').hasClass('right')) {
                $checkbox.nextAll('.correct-checkbox').show();
            } else if ($checkbox[0].checked &&
                $checkbox.nextAll('.response').hasClass('wrong')) {
                $checkbox.nextAll('.incorrect-checkbox').show();
            } else if (!$checkbox[0].checked &&
                $checkbox.nextAll('.response').hasClass('right')) {
                $checkbox.nextAll('.incorrect-checkbox').show();
            } else {
                $checkbox.nextAll('.correct-checkbox').show();
            }
        }
        $target.parent('.mcq').find('.response').slideToggle('fast');
    });
});