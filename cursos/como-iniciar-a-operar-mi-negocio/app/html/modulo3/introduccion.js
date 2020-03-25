function watchP1() {
    let p1 = document.getElementById("p1");
    let text = document.getElementById("text");
    p1.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block" style="height: 100%;">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="text-center">
                                            <img src="../../assets/images/course/modulo2/1630857844.jpg" alt="" width="75%">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h1 class="card-title">Compras</h1>
                                        <ol>
                                            <li>Proceso de compras</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`;
    });
}
function watchP2() {
    let p2 = document.getElementById("p2");
    let text = document.getElementById("text");
    p2.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block" style="height: 100%;">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="text-center">
                                            <img src="../../assets/images/course/modulo2/1630857844.jpg" alt="" width="75%">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h1 class="card-title">Inventarios</h1>
                                        <ol>
                                            <li>Proceso de inventarios</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`;
    });
}
function watchP3() {
    let p3 = document.getElementById("p3");
    let text = document.getElementById("text");
    p3.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block" style="height: 100%;"> 
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="text-center">
                                            <img src="../../assets/images/course/modulo2/1630857844.jpg" alt="" width="75%">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h1 class="card-title">Producción</h1>
                                        <ol>
                                            <li>Proceso de producción</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`;
    });
}
function watchP4() {
    let p4 = document.getElementById("p4");
    let text = document.getElementById("text");
    p4.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block" style="height: 100%;">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="text-center">
                                            <img src="../../assets/images/course/modulo2/1630857844.jpg" alt="" width="75%">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h1 class="card-title">Objetivo de negocio</h1>
                                        <ol>
                                            <li>Proceso de costos</li>
                                            <ul>
                                                <li>Clasificación de costos por función</li>
                                                <li>Clasificación de costos por comportamiento</li>
                                            </ul>
                                            <li>Proceso de costos</li>
                                            <ul>
                                                <li>Factores que influyen en la determinación del precio</li>
                                            </ul>
                                            <li>¿Cuáles serán mis ingresos?</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`;
    });
}
function watchP5() {
    let p5 = document.getElementById("p5");
    let text = document.getElementById("text");
    p5.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block" style="height: 100%;">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="text-center">
                                            <img src="../../assets/images/course/modulo2/1630857844.jpg" alt="" width="75%">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h1 class="card-title">Contabilidad y finanzas</h1>
                                        <ol>
                                            <li>Utilidades o pérdidas</li>
                                            <li>Punto de equilibrio</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`;
    });
}
function watchP6() {
    let p6 = document.getElementById("p6");
    let text = document.getElementById("text");
    p6.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block" style="height: 100%;">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="text-center">
                                            <img src="../../assets/images/course/modulo2/1630857844.jpg" alt="" width="75%">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h1 class="card-title">Ventas y cobranza</h1>
                                        <ol>
                                            <li>¿Dónde y cómo vender?</li>
                                            <li>¿Cómo cobrar a los clientes?</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`;
    });
}
function watchP7() {
    let p7 = document.getElementById("p7");
    let text = document.getElementById("text");
    p7.addEventListener("click", () => {
        text.innerHTML =    `<div class="card card-block" style="height: 100%;">
                                <div class="row">
                                    <div class="col-12 col-sm-6">
                                        <div class="text-center">
                                            <img src="../../assets/images/course/modulo2/1630857844.jpg" alt="" width="75%">
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <h1 class="card-title">Mercados</h1>
                                        <ol>
                                            <li>¿Cómo podemos vender más?</li>
                                            <li>Servicio al cliente</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>`;
    });
}


function init() {
    watchP1();
    watchP2();
    watchP3();
    watchP4();
    watchP5();
    watchP6();
    watchP7();
}

init()