function isanumber (orden_num) {
    do {
        input_user = parseFloat(prompt("Ingresa el " + orden_num + " número"));
    }
    while (isNaN(input_user));   

    return input_user;
}

let numbers = [];
alert("Programa para realizar el promedio cinco números");

const msj_user = ["primer", "segundo", "tercer", "cuarto", "quinto"]; 

for (i = 0; i < 5; i++) {
    numbers[i] = isanumber(msj_user[i]);
}
console.log(numbers);

let result = 0;
for (i = 0; i < numbers.length; i++) { //El for nos sirve para manejar los índices(posiciones) del arreglo, no con los valores
    result += numbers[i]; // result = result + numbers[i];     
}
alert("El promedio de estos números es: " + (result / numbers.length));