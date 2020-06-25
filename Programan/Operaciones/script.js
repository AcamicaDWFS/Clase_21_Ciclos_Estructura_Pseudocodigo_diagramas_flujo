let numero;
let resultado = 0;
operaciones();

//Recibe los parametros de entrada y obtiene la suma y el promedio de 5 números
function operaciones() {
    for (i = 1; i <= 5; i++) {
        do {
            numero = parseInt(prompt("Ingrese un número:"));
        } while (isNaN(numero))

        console.log("Número " + i + ": " + numero);
        resultado += numero;
        if (i == 5) {
            alert("La suma de los números es: " + resultado);
            alert(`El promedio de los números es:${resultado / i}`);
        }
    }
}

