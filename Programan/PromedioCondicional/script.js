let numero;
let contador=0;
let conjunto = new Array();
let input;
entrada();

//Recibe los parametros de entrada
function entrada() { 
    do {      
        input = prompt("Ingresar un numero:")
        numero = parseInt(input);      
        if (!isNaN(numero)) { 
            if (numero > 0 && numero < 10) {
                contador++;
                conjunto.push(numero);
             }            
        } 
        else {
            if (input  != 'salir') {
                alert("Ingresar un valor numérico");
                numero = 0;
            }
        }                   
    }  while (input  != 'salir') 
    promedio (conjunto,contador);   
}

//Obtiene el promedio de los números ingresados
function promedio (conjunto,contador) {    
    let sumatoria=0;
    for(i=0;i<contador;i++) {
        sumatoria += conjunto[i];
    }    
    alert(`Numeros ingresados: \n${conjunto.join('\n')}\nEl promedio es: ${sumatoria/contador}`);
    
}
