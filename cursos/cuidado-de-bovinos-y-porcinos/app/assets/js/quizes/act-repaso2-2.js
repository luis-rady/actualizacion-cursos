
$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar1").style.background='#28D81C';
      document.getElementById("button Verificar1").style.border='#000000';
      document.getElementById("button Verificar1").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar1").style.background='#F20D0D';
      document.getElementById("button Verificar1").style.border='#000000';
      document.getElementById("button Verificar1").value='Incorrecto';
    }
});
  
$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar2").style.background='#28D81C';
      document.getElementById("button Verificar2").style.border='#000000';
      document.getElementById("button Verificar2").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar2").style.background='#F20D0D';
      document.getElementById("button Verificar2").style.border='#000000';
      document.getElementById("button Verificar2").value='Incorrecto';
    }
});
  
$('input[name="pregunta_3"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar3").style.background='#28D81C';
      document.getElementById("button Verificar3").style.border='#000000';
      document.getElementById("button Verificar3").value='Correcto';
    } else if(respuesta == "incorrect"){
      document.getElementById("button Verificar3").style.background='#F20D0D';
      document.getElementById("button Verificar3").style.border='#000000';
      document.getElementById("button Verificar3").value='Incorrecto';
    }
});
  
  $('input[name="pregunta_4"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct4"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct4"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect4"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Alguna respuesta es incorrecta');
        document.getElementById("button Verificar4").style.background='#F20D0D';
        document.getElementById("button Verificar4").style.border='#000000';
        document.getElementById("button Verificar4").value='Incorrecto';
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones correctas');
    }
    else if (res_cor == correctas){
        document.getElementById("button Verificar4").style.background='#28D81C';
        document.getElementById("button Verificar4").style.border='#000000';
        document.getElementById("button Verificar4").value='Correcto';
    }
    event.preventDefault();
});

$('input[name="pregunta_5"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct5"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct5"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect5"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Alguna respuesta es incorrecta');
        document.getElementById("button Verificar5").style.background='#F20D0D';
        document.getElementById("button Verificar5").style.border='#000000';
        document.getElementById("button Verificar5").value='Incorrecto';
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones correctas');
    }
    else if (res_cor == correctas){
        document.getElementById("button Verificar5").style.background='#28D81C';
        document.getElementById("button Verificar5").style.border='#000000';
        document.getElementById("button Verificar5").value='Correcto';
    }
    event.preventDefault();
});

$('input[name="pregunta_6"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct6"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct6"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect6"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Alguna respuesta es incorrecta');
        document.getElementById("button Verificar6").style.background='#F20D0D';
        document.getElementById("button Verificar6").style.border='#000000';
        document.getElementById("button Verificar6").value='Incorrecto';
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones correctas');
    }
    else if (res_cor == correctas){
        document.getElementById("button Verificar6").style.background='#28D81C';
        document.getElementById("button Verificar6").style.border='#000000';
        document.getElementById("button Verificar6").value='Correcto';
    }
    event.preventDefault();
});