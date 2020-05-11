$('input[name="pregunta_1"][type="button"]').on('click', function(event){
    let correctas = $('input[name="respuesta"][type="checkbox"][value="correct"]').toArray().length;
    let res_cor = $('input[name="respuesta"][type="checkbox"][value="correct"]:checked').toArray().length;
    let res_incor = $('input[name="respuesta"][type="checkbox"][value="incorrect"]:checked').toArray().length;
    if(res_incor > 0){
        alert('Alguna respuesta es incorrecta');
    }else if(res_cor !== correctas && res_cor > 0){
        alert('Existen más opciones correctas');
    }
    else if (res_cor == correctas){
        document.getElementById("button Verificar1").style.background='#28D81C';
        document.getElementById("button Verificar1").style.border='#000000';
        document.getElementById("button Verificar1").value='Correcto';
    }
    event.preventDefault();
});

$('input[name="pregunta_2"][type="button"]').on('click', function(event){
    let respuesta = $('input[name="respuesta"][type="radio"]:checked').val();
    if (respuesta === "correct"){
      document.getElementById("button Verificar2").style.background='#28D81C';
      document.getElementById("button Verificar2").style.border='#000000';
      document.getElementById("button Verificar2").value='Correcto';
      alert('¡Correcto!\nEs importante que los tapetes se encuentren al entrar, para prevenir la entrada de enfermedades a la granja.');
    } else if (respuesta == "incorrect"){
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
      alert('¡Correcto!\nEl tapete debe de ser lo suficientemente grande para asegurarse de que se pase por él antes de entrar.');
    } else if (respuesta == "incorrect"){
      document.getElementById("button Verificar3").style.background='#F20D0D';
      document.getElementById("button Verificar3").style.border='#000000';
      document.getElementById("button Verificar3").value='Incorrecto';
    }
  });