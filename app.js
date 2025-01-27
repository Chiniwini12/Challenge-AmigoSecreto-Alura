// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = "";
let ListaAmigos = [];
let amigoSecreto = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);
    
    if (amigo == "" || amigo == isNaN()) {
        alert("Debes ingresar el nombre de un amigo");
        limpiarCaja();
        } else {
            ListaAmigos.push(amigo);
            console.log(ListaAmigos);
            console.log(ListaAmigos.length);
            limpiarCaja();
            if (ListaAmigos.length === 1){
            asignarTextoElemento("listaAmigos",`${ListaAmigos}`);
            console.log("igual a 1");
            }
            else {
                asignarTextoElemento("listaAmigos",ListaAmigos.join("<br>"),`${ListaAmigos}`);
                console.log("mayor a 1");
            }
        }
        return ListaAmigos;
}

function sortearAmigo() {
    asignarTextoElemento("listaAmigos", "");
    amigoSecreto = ListaAmigos[Math.floor(Math.random()*ListaAmigos.length)];
    asignarTextoElemento("resultado", `Tu amigo secreto es: ${amigoSecreto}`);
    
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    let caja = document.getElementById('amigo').value = '';
}
