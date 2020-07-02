function isanumber (orden_num) {
    do {
        input_user = parseFloat(prompt("Ingresa el " + orden_num + " número"));
    }
    while (isNaN(input_user));   

    return input_user;
}

let numbers = [];
alert("Programa para sumar cinco números");

/* numbers[0] = isanumber("primer");
numbers[1] = isanumber("segundo");
numbers[2] = isanumber("tercer");
numbers[3] = isanumber("cuarto");
numbers[4] = isanumber("quinto"); */

const msj_user = ["primer", "segundo", "tercer", "cuarto", "quinto"]; 

for (i = 0; i < 5; i++) {
    numbers[i] = isanumber(msj_user[i]);
}
console.log(numbers);

/* let result = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
alert("La suma de estos números es: " + result); */

let result = 0;
for (i = 0; i < numbers.length; i++) { //El for nos sirve para manejar los índices(posiciones) del arreglo, no con los valores
    result += numbers[i]; // result = result + numbers[i];     
}
alert("La suma de estos números es: " + result);