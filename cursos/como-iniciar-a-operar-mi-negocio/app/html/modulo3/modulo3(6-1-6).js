function displayAnswer(option) {
    let answer = document.getElementById("answer");
    if(option == 1) {
        answer.innerHTML = `<div class="alert alert-primary" role="alert">
                                Excelente opción. A los niños y jóvenes generalmente les gustan mucho los elotes y entre más de ellos pasen por el local, más posibilidades de vender.
                            </div>`;
    } else if (option == 2) {
        answer.innerHTML = `<div class="alert alert-primary" role="alert">
                                Esta opción puede NO ser la mejor, puesto que a menos que su casa esté en un lugar muy visible, éste no sería visto por muchas personas.
                            </div>`;
    } else if (option == 3) {
        answer.innerHTML = `<div class="alert alert-primary" role="alert">
                                Tener el puesto en el parque sería una buena opción. Sin embargo, las ventas dependerán de cuánta gente vaya al parque.
                            </div>`;
    } else if (option == 4) {
        answer.innerHTML = `<div class="alert alert-primary" role="alert">
                                Esta podría ser una buena opción, puesto que se sería posible conocer quiénes son y dónde viven los clientes que compran más, aunque existe la desventaja de que la gente no pueda encontrar un lugar fijo para comprar cuando se le antoje un elote desgranado.
                            </div>`;
    }
    answer.scrollIntoView({behavior: "smooth", block: "center"});
}

function displayError() {
    let error = document.getElementById("answer");
    error.innerHTML = `<div class="alert alert-danger" role="alert">
                            Por favor seleccione una opción.
                        </div>`;
    answer.scrollIntoView({behavior: "smooth", block: "center"});
}

function validate() {
    let radios = document.getElementsByName("p1");
    for(let i = 0 ; i < radios.length ; i++) {
        if(radios[i].checked){
            displayAnswer(radios[i].value);
            return;
        }
    }
    displayError();
}

function watchSubmit() {
    let submit = document.getElementById("submit");
    submit.addEventListener("click", validate);
}

function watchForm() {
    let form = document.getElementById("form");
    form.addEventListener("submit", ev => {
        ev.preventDefault();
    });
}

function init() {
    watchSubmit();
    watchForm();
}

init();