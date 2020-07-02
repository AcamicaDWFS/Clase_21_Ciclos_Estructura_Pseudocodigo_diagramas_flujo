function isanumber() {
    do {
        input_user = parseInt(prompt("Ingresa un número ENTERO del 1 al 10."));
    }
    while (isNaN(input_user));

    return input_user;
}

function validation (numb) {
    if (numb >= 1 && numb <= 10) {
        alert("Número registrado: " + numb);
        return true;
    } else {
        alert("Número inválido. Sólo puedes ingresar números enteros entre el 1 y el 10.");
        return false;
    }
}

function numb_t_letter (number_trans) {
    const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let result = letras[number_trans - 1];
    return result;    
}

alert("Programa para transformar números a letras.");

let number;
let numb_v;

do {
    number = isanumber();
    console.log(number);
    numb_v = validation(number);
} while (!numb_v);

let result_letra = numb_t_letter(number);
alert("La letra correspondiente al número " + number + " es: " + result_letra);