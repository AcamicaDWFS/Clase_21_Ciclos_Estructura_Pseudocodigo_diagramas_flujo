let numero;
let contPar=0;
let contImpar=0;
let conjunto = new Array();
entrada();

//Recibe los parametros de entrada y obtiene la suma y el promedio de 5 números
function entrada() { 
    do {      
        numero = parseInt(prompt("Ingresar un numero:"));      
        if (!isNaN(numero)) { 
            conjunto.push(numero);
            parImpar (numero%2);
        } 
        else {
            alert("Ingresar un valor numérico");            
        }                   
    }  while (numero  != 0) 
    if (contPar > contImpar) {
        alert(`Numeros ingresados: \n${conjunto.join('\n')}\nLos números pares tuvieron ${contPar} ingresos`);
    }
    else if(contImpar > contPar){
        alert(`Numeros ingresados: \n${conjunto.join('\n')}\nLos números impares tuvieron ${contImpar} ingresos`);
    }
    else {
        alert(`Numeros ingresados: \n${conjunto.join('\n')}\nLos números pares e impares tuvieron ${contImpar} ingresos`);
    }
}

//Contabiliza los números ingresados pares o impares
function parImpar (numero) {    

    switch(numero) {
        case 0:
            contPar++;
            break;
        default:
            contImpar++;                    
    }   
}
