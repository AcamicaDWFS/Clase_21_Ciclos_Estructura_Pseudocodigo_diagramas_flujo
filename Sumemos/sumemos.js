function getUserInput (ordenNum) {
    do {
        input_user = parseFloat(prompt("Ingresa el " + ordenNum + " número"));
    }
    while (isNaN(input_user));   

    return input_user;
}

let numbers = [];
alert("Programa para sumar cinco números");

/* numbers[0] = getUserInput("primer");
numbers[1] = getUserInput("segundo");
numbers[2] = getUserInput("tercer");
numbers[3] = getUserInput("cuarto");
numbers[4] = getUserInput("quinto"); */

const msjUser = ["primer", "segundo", "tercer", "cuarto", "quinto"]; 

const lengthMsjUser = msjUser.length;

for (let index = 0; index < lengthMsjUser; index+= 1) {
    numbers[index] = getUserInput(msjUser[index]);
}
console.log(numbers);

/* let result = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
alert("La suma de estos números es: " + result); */

let result = 0;
for (let index = 0; index < numbers.length; index+= 1) { //El for nos sirve para manejar los índices(posiciones) del arreglo, no con los valores
    result += numbers[index]; // result = result + numbers[i];     
}
alert("La suma de estos números es: " + result);