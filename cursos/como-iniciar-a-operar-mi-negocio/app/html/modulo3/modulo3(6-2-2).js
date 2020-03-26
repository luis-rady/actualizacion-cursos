function removeCredits() {
    let buttons = document.getElementsByTagName("input")
    for (let i = 0 ; i < buttons.length ; i++) {
        buttons[i].classList.remove("btn-credits");
    }
}

function watchCobradores() {
    let text = document.getElementById("text");
    let cobradores = document.getElementById("cobradores");
    cobradores.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block">
                                <h1 class="card-title">Por medio de cobradores</h1>
                                <p>Es una forma muy común en los negocios que proporcionan crédito a sus clientes, el cobrador es una persona que se dedica exclusivamente a visitar a los clientes que deben para cobrarles, pero no tienen ninguna autorización para tomar decisiones en cuanto a ampliar el tiempo que les das para que te paguen o para decidir si toman un pago pequeño en lugar del pago completo que debe darte el cliente.</p>
                            </div>`;
        removeCredits();
        cobradores.classList.add("btn-credits");

    });
}

function watchVendedores() {
    let text = document.getElementById("text");
    let vendedores = document.getElementById("vendedores");
    vendedores.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block">
                                <h1 class="card-title">Por medio de los vendedores</h1>
                                <p>Cuando se realizan compras al contado, ellos mismos pueden hacer la cobranza y posteriormente darte el dineor para que lo registres en la empresa.</p>
                            </div>`;
        removeCredits();
        vendedores.classList.add("btn-credits");
    });
}


function init() {
    watchCobradores();
    watchVendedores();
}

init();