let btnCalular = document.getElementById("btnCalcular");
let inputnombre = document.getElementById("inputNombre");
let inputProyecto = document.getElementById("inputProyecto");
let total;


btnCalular.addEventListener("click", function (e) {
    e.preventDefault();
    total =0;
    resp = document.getElementById("resp");
    let slcTiempo = document.getElementById("slcTiempo");
    let tiempo = option(slcTiempo);
    let slcMante = document.getElementById("slcMante");
    let mante = option(slcMante);
    let inputBD = document.getElementById("inputBD");
    let inputCodi = document.getElementById("inputCodi");
    let inputPaWeb = document.getElementById("inputPaWeb");
    let inputApp = document.getElementById("inputApp");
    let msg = `<p>Cotización de proyecto <Strong> ${inputProyecto.value}</Strong></p>
                <p>par el  clinete <Strong>${inputnombre.value}</Strong></p>
                <p>Consiste en: </p>
                <ul class = "list-group">`;

    switch(tiempo){
        case "1":
            total += 50000;
            msg +=`<li class = "list-group-item"> Tiempo estimado: ${slcTiempo.options[1].text} </li>`
            break;
        case "2":
            msg +=`<li class = "list-group-item"> Tiempo estimado: ${slcTiempo.options[2].text} </li>`
            total += 45000;
            break;
        case "3":
            msg +=`<li class = "list-group-item"> Tiempo estimado: ${slcTiempo.options[3].text} </li>`
            total += 40000;
            break;
        case "4":
            msg +=`<li class = "list-group-item"> Tiempo estimado: ${slcTiempo.options[4].text} </li>`
            total += 35000;
        default: 
            break;
    }

    switch(mante){
        case "1":
            msg +=`<li class = "list-group-item"> Tiempo de Mantenimiento: ${slcMante.options[1].text} </li>`
            break;
        case "2":
            msg +=`<li class = "list-group-item"> Tiempo de Mantenimiento: ${slcMante.options[2].text} </li>`
            total += 1000;
            break;
        case "3":
            msg +=`<li class = "list-group-item"> Tiempo de Mantenimiento: ${slcMante.options[3].text} </li>`
            total += 2500;
            break;
        case "4":
            msg +=`<li class = "list-group-item"> Tiempo de Mantenimiento: ${slcMante.options[4].text} </li>`
            total += 5000;
        default: 
            break;
    }
    
    if(inputBD.checked){
        msg += `<li class = "list-group-item"> Proyecto tipo: Base de Datos </li>`
        total += 10000;
    }
    if(inputCodi.checked){
        msg += `<li class = "list-group-item"> Proyecto tipo: Sistema para Computadora </li>`
        total += 5000;
    }
    if(inputPaWeb.checked){
        msg += `<li class = "list-group-item"> Proyecto tipo: Página Web </li>`
        total += 8000;
    }
    if(inputApp.checked){
        msg += `<li class = "list-group-item"> Proyecto tipo: Aplicación móvil </li>`
        total += 12000;
    }

    msg += `</ul>
    <p> Total del proyecto: $ ${total}
    `
    resp.innerHTML = msg;
});
inputnombre.addEventListener("blur", validaVacio);
inputProyecto.addEventListener("blur", validaVacio);

function validaVacio(e) {
    let campo = e.target;
    
    if (campo.value.length == 0 || campo.value.length < 5) {
        campo.focus();
        campo.classList.add("is-invalid");
        campo.classList.remove("is-valid");
    } else {
        campo.classList.remove("is-invalid");
        campo.classList.add("is-valid");
    }
}

function option(e) {
    let campo = e;
   
    let option;
    for (i = 0; i < campo.options.length; i++) {
        if (campo.options[i].selected) {
            option = campo.options[i].value;
            break;
        }
    }
   
    switch (option) {
        case "1":
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
            break;
        case "2":
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
            break
        case "3":
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
            break;
        case "4":
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
            break;
        default:
            option=0;
            campo.classList.add("is-invalid");
            campo.classList.remove("is-valid");
            break;
    }
    return option;
}