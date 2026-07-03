console.log("Calculadora de Maikel iniciada");

function leerNumeros(){

    let numero1 = Number(document.getElementById("numero1").value);

    let numero2 = Number(document.getElementById("numero2").value);

    return{
        numero1:numero1,
        numero2:numero2
    };
}

function sumar(){

    let numeros = leerNumeros();

    let resultado = numeros.numero1 + numeros.numero2;

    document.getElementById("resultado").innerText =
    "Resultado = " + resultado;

}

function restar(){

    let numeros = leerNumeros();

    let resultado = numeros.numero1 - numeros.numero2;

    document.getElementById("resultado").innerText =
    "Resultado = " + resultado;

}

function multiplicar(){

    let numeros = leerNumeros();

    let resultado = numeros.numero1 * numeros.numero2;

    document.getElementById("resultado").innerText =
    "Resultado = " + resultado;

}

function dividir(){

    let numeros = leerNumeros();

    if(numeros.numero2===0){

        document.getElementById("resultado").innerText =
        "Error: No se puede dividir por cero";

        return;
    }

    let resultado = numeros.numero1 / numeros.numero2;

    document.getElementById("resultado").innerText =
    "Resultado = " + resultado;

}