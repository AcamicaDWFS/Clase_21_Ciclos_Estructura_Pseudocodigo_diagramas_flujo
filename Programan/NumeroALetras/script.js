let numero;
let resultado ='';
let conjunto = new Array();

numero = parseInt(prompt("Ingresar un numero:"));      
conversion(numero);


//Convierte de números a letras 
function conversion (numero) {    

    switch(numero) {
        case 1:
            resultado ='a';
            break;
        case 2:
            resultado = 'b';
            break;
        case 3:
            resultado = 'c';
            break;
        case 4:
            resultado = 'd';
            break;
        case 5:
            resultado ='e';
            break;
        case 6:
            resultado = 'f';
            break;
        case 7:
            resultado = 'g';
            break;
        case 8:
            resultado = 'h';
            break;
        case 9:
            resultado = 'i';
            break;
        case 10:
            resultado = 'j';
            break;
        default:
            alert("El valor ingresado es incorrecto");                            
    }   
    if (numero>=1 || numero<=10){
        alert(`El número ${numero} en letra es ${resultado}`);
    }
}
