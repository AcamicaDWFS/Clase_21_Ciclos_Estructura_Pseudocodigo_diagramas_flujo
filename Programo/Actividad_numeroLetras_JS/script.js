
let numero = parseInt( prompt("Ingresa un numero entre 1 y 10") );
let letra;
let entrado = true;

function validarNumero(n) {
    switch (numero) {
        case 1:
            letra = 'a';
            break;
        case 2:
            letra = 'b';
            break;
        case 3:
            letra = 'c';
            break;
        case 4:
            letra = 'd';
            break;
        case 5:
            letra = 'e';
            break;
        case 6:
            letra = 'f';
            break;
        case 7:
            letra = 'g';
            break;
        case 8:
            letra = 'h';
            break;
        case 9: 
            letra = 'i';
            break;
        case 10:
            letra = 'j';
            break;
        default:
            alert("Valor inválido");
            encontrado = false;
    }
}

validarNumero(numero);

if (encontrado = true) {
    alert("Tu letra es: " + letra );
}
