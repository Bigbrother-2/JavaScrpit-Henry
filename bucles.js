// Los bucles o ciclos de iteracion permiten realizar acciones de caracter repetitivo de manera sencilla ahorrandonos asi lineas de codigos. Por ejemplo, si quisieramos hacer una suma desde el uno al diez deberiamos hacer algo como esto.

var suma = 0
// suma = suma + 1
// suma = suma + 2
// suma = suma + 3
// suma = suma + 4
// console.log(suma)

// A simple vista no pasa nada, porque no son muchas lineas de codigo. Pero que pasaria si quisieramos escribir hasta el 100 o incluso el 1.000? Aca es donde entra en juego el los bucles o ciclos de iteracion. 


//for. sintaxis. For (Priemro: declarar una variable de iteracion e iniciarla al valor correspondiente.) var i=0 (Segundo: Es una condicion de cumplimiento, es decir que mientras se cumpla esta condicion el bucle sigue.); i < 10 (Tercero: Es la accion que debe realizar cada vez que se cumple un ciclo.) QUEDANDO ASI: for (var i= 0; i < 10 ; i ++). Dentro de las llaves, escribiremos el codigo que queremos que se repita. 
//var suma = 0
// for (var i= 0; i<5; i ++){
//     suma = suma + i
//     console.log("Variable de iteracion", i)
    
// }
// console.log("Variable de suma", suma)


//while. Este bucle nos va a permitir hacer una determinada accion siempre y cuando sea verdadera. Sintaxis. Palabra reservada WHILE + (Aca va la condicion a cumplirse)+ {Codigo que se repite.}


// while (suma<3){
//     suma=suma +1;
//     console.log(suma)
// }


// VARACION DE WHILE. DO WHILE. Nos permite realizar instrucciones mientras se cumpla una condición siempre ejecutando el bloque de instrucciones al menos una vez. ¡Recuerda actualizar en algún momento las variables de la condición para evitar bucles infinitos! 

// Sintaxis 

/* do{
    //codigo a ejecutar.
} while (condicion.); 
*/ 
/*var i = 0;
do {
    console.log("i = " + i);
    i++;
} while(i<10);*/






//uando debemos usar cada uno. 
// Tienen sus diferencias, por ejepmlo: Debemos usar el for cuando sabemos la cantidad maxima exacta de pasos que queremos ejecutar. Caso contrario. Usamos el While cuando no conozcamos concerteza los pasos necesarios hasta terminar la ejecucion. 

// Swich. 

/*
- Se utiliza para hacer dierentes acciones basadas en diferentes condiciones. 
-la condicion se evalalua una unica vez.
-Si hay alguna coincidencia con algun valor se ecjecuta el bloque de codigo corresporndiete. 

Sintaxis. 

swich (Expresion){
    case valor1
        //instucciones para valor1
        break    
    case valorn
        //insrucciones para valorn
        break
    defautl
        instrucciones en caso de qe no se cumpla nunguna condicion.
}
*/

// var nota = 10
// var mensaje = ""

// switch(nota){
//     case 0:
//         mensaje = "Reporbaste el examen. jajaj fraca"
//         break
//     case 1:  //para ahorar lineas de codigo que se repiten se borra el codigo que se deberia ejecutar hasta el ultimo que se repite. De esta manera si por ejepmlo sacamos un 1, va a mostrar lo primero que se pueda mostrar, en este caso, va a usar los valores del case 5.
//     case 2: 
//     case 3: 
//     case 4: 
//     case 5: 
//         mensaje = "Reprobaste el examen"
//         break
//     case 6:
//         mensaje = "Aprobaste el examen de pedo"
//         break
//     case 7:
//         mensaje = "Aprobaste el examen."
//         break
//     case 8: 
//         mensaje = "Aprobaste el examen. Buen trabajo"
//         break
//     case 9:
//         mensaje = "Aprobaste el examen con 9, Exelente."
//         break
//     case 10: 
//         mensaje = "Buena cerebrito. Bien hecho."
//         break
//     default: 
//         mensaje = "QUE NOTA TE DIERON?"
// }

// console.log(mensaje)



// SENTECIA BREAK Y CONTINUE  nos permiten interrumpir la ejecución de bucles y bloques de código. 

/*El break nos permite salir o saltar fuera de un bucle, finalizandolo.
El continue nos permite saltar hasta la siguienteitecaion del bucle- perimite saltar una o mas iteraciones*/

// EJEMPLO DE BUCLE CON BREAK

// var i 
// for (i=0; i<10; i++){
//     if (i==7){
//         break;
//     }
// }

//console.log("i = " + i)

//Ejemplo con bucle con continue

var j;
for(j=0; j<10; j++){
    if (j==7|| j==5){
        continue;
    }
}

console.log("j = "+j)