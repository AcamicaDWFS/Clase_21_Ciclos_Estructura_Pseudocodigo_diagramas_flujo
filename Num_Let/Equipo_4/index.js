function suma () {
    var numero_1 = parseInt(prompt("Ingresa un número"));
    var numero_2 = parseInt(prompt("Ingresa otro número"));
    var numero_3 = parseInt(prompt("Ingresa otro número"));
    var numero_4 = parseInt(prompt("Ingresa otro número"));
    var numero_5 = parseInt(prompt("Ingresa un último número"));
    var resultado = numero_1 + numero_2 + numero_3 + numero_4 + numero_5;

    alert("La suma es " + resultado);
}

function suma_2 (){
    var resultado = 0;
    for (var contador = 0; contador <5; contador++){
        var numeros = parseInt(prompt("Ingresa un numero"));
        resultado = resultado + numeros;
    }
    alert("La suma es " + resultado);
    alert("El promedio es " + resultado/5);

}

function abecedario (){
    var numero = prompt("Ingresa un numero")
    switch (numero) {
        case "1" :
            alert("a");
            break;
        case "2" :
            alert("b");
            break;
        case "3" :
            alert("c");
            break;
        case "4" :
            alert("d");
            break;
        case "5" :
            alert("e");
            break;
        case "6" :
            alert("f");
            break;
        case "7" :
            alert("g");
            break;
        case "8" :
            alert("h");
            break;
        case "9" :
            alert("i");
            break;
        case "10" :
            alert("j");
            break;
        default:
            alert(numero + " no es un número valido");
    }
}


function edades () {
    var resultado = 0;
    do {
        var numeros = parseInt(prompt("Ingresa una edad"));
        if (numeros >= 18) {
            resultado++;
        } 
    } while (numeros!=0);
       
    alert("La cantidad de mayores de edad es: " + resultado);
}

function promedio_condicional () {
    var resultado = 0;
    var numeros_un_digito = 0;
    do {
        var numeros = (prompt("Ingresa un número"));
        console.log("numeros = " + numeros);
        if (parseInt(numeros) <10) {
            resultado = resultado + parseInt(numeros);
            numeros_un_digito++;
            console.log("Resultado = " + resultado);
            console.log("numeros un digito = " + numeros_un_digito);
        }
    }while (numeros!="salir");

    if (numeros_un_digito == 0){
        alert("Por favor ingresa un número con un digito");
    } else {
        alert("El promedio es " + (resultado/numeros_un_digito));
    }
}

function pares_impares () {
    var pares = 0;
    var impares = 0;
    do {
        var numeros = parseInt(prompt("Ingresa un número"));
        if (numeros!=0) {
            if (numeros % 2 == 0) {
                pares++;
                console.log("pares = " + pares);
            } else {
                impares++;
                console.log("impares = " + impares)
            }
        }
    } while (numeros!=0);

    if (pares>impares) {
        alert("Hay más pares. Total = " + pares);
    }else if (pares == impares) {
        alert("Hay el mismo número de pares e impares. Total pares= " + pares + " Total impares= " + impares);
    }else {
        alert("Hay más impares. Total = " + impares);
    }
}