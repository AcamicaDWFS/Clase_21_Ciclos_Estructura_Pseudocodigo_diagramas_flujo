function isanumber() {
    do {
        input_user = parseInt(prompt("Ingresa los números ENTEROS que desees. \nCuando finalices escribe el número cero."));
    }
    while (isNaN(input_user));

    return input_user;
}

let numbers = []; //Almacén de números ingresados
alert("Programa para contabilizar números enteros pares e impares.");
let i = 0;
let input_numbers = isanumber(); //El input de los números que el usuario nos ingrese

//Inicio del ciclo while para guardar los inputs en el array numbers
while (input_numbers != 0) { //Si es diferente de cero continúa
    numbers[i] = input_numbers; //Guardar los valores de cada elemento; arreglo y en que casilla se guardará y su valor
    input_numbers = isanumber(); //Repetir el input para ingresar los números
    i++; // Incrementar el siguiente índice para el siguiente elemento de numbers
}
console.log(numbers);

function id_pares(array_num) {
    let almacen_pares = [];
    let almacen_impares = [];
    for (i = 0; i < array_num.length; i++) {
        let pares = array_num[i] % 2;
        if (pares == 0) {
            almacen_pares.push(array_num[i]);
        } else {
            almacen_impares.push(array_num[i]);
        }
    }
    return almacen_pares;
}

function id_impares(array_num) {
    let almacen_pares = [];
    let almacen_impares = [];
    for (i = 0; i < array_num.length; i++) {
        let pares = array_num[i] % 2;
        if (pares == 0) {
            almacen_pares.push(array_num[i]);
        } else {
            almacen_impares.push(array_num[i]);
        }
    }
    return almacen_impares;
}

let numbers_pares = id_pares(numbers);
let numbers_impares = id_impares(numbers);

console.log("PARES: " + numbers_pares);
console.log("IMPARES: " + numbers_impares);

if (numbers_pares.length > numbers_impares.length) {
    console.log("Se encontraron " + numbers_pares.length + " números PARES." + " Los cuáles son: " + numbers_pares);
    alert("Hubo más números enteros PARES que IMPARES. \nLos números pares son: " + numbers_pares);
} else if (numbers_pares.length == numbers_impares.length) {
    alert("Hubo el mismo número de enteros PARES que IMPARES.");
} else {
    console.log("Se encontraron " + numbers_impares.length + " números IMPARES." + " Los cuáles son: " + numbers_impares);
    alert("Hubo más números enteros IMPARES que PARES. \nLos números impares son: " + numbers_impares);
}