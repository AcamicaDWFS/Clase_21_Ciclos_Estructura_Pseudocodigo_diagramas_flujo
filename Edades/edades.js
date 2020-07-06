function isanumber() {
    do {
        input_user = parseInt(prompt("Ingresa la edad de cada uno de tus primos. \nCuando finalices escribe el número cero."));
    }
    while (isNaN(input_user));

    return input_user;
}

let edades = []; //Almacén de las edades
alert("Programa para calcular cuántos de tus primos son mayores de edad.");

let i = 0;
let input_edades = isanumber(); //El input que el usuario nos ingresa de las edades de sus primos
while (input_edades != 0) { //Si es diferente de cero, continúa
    edades[i] = input_edades; // Guardar los valores de cada elemento; arreglo y en que casilla se guardará y su valor
    input_edades = isanumber(); // Repetir el input para ingresar edades
    i++; // Incrementar el siguiente índice para el siguiente elemento de edades
}
console.log(edades);

function mayor_edad(edades_guardadas) {
    let contador_mayor_edad = 0;
    for (i = 0; i < edades_guardadas.length; i++) {
        if (edades_guardadas[i] >= 18) {
            contador_mayor_edad++;
        }
    }
    return contador_mayor_edad;
}

let resultado_edades = mayor_edad (edades);
alert("Tienes " + resultado_edades + " primos que son mayores de edad.");