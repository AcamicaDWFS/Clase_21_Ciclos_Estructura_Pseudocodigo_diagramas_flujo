function isanumber() {
    do {
        input_user = prompt("Ingresa los números que deseas promediar. \nCuando finalices escribe la palabra 'salir'.");
        if (input_user == "salir") {
            return input_user;
        }
        input_user = parseFloat(input_user);
    } while (isNaN(input_user));
    return input_user;
}

let numbers = []; //Almacén de los números a promediar
alert("Programa para calcular el promedio de los números de UN digito ingresados.");

let i = 0;
let input_numbers = isanumber(); //El input que el usuario nos ingresa de los números que desea promediar
while (input_numbers != "salir") { //Si es diferente de salir, continúa
    numbers[i] = input_numbers; // Guardar los valores de cada elemento; arreglo y en que casilla se guardará y su valor
    input_numbers = isanumber(); // Repetir el input para ingresar números
    i++; // Incrementar el siguiente índice para el siguiente elemento de número
}
console.log(numbers);


function promedio(validar_num) {
    let numeros_digito = [];
    for (i = 0; i < validar_num.length; i++) {
        let id_num = validar_num[i] - 9;
        if (id_num <= 0) {
            numeros_digito.push(validar_num[i]);
        }
    }
    let sum = 0;
    for (i = 0; i < numeros_digito.length; i++) {
        sum += numeros_digito[i];
    }
    let prom = sum / numeros_digito.length;
    return prom;
}

let resultado_prom = promedio(numbers);
alert("El promedio de los números de UN digito es: " + resultado_prom);