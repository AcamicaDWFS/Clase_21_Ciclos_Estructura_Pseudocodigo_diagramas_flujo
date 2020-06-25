let i = 0;
let suma=0;

while (i < 5 ) {
    suma += parseInt( prompt("Ingresa un numero") );
    i++;
}

alert("La suma de los números es: " + suma);
alert ("El promedio es: " + suma/ i );