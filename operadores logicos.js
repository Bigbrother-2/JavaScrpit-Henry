// Por ahora vamos a ver solo 3 operadores logicos

// Negacion o NOT  Da vuelta el sentido del operador. Si se dan todas las condiciones, dari por ejemplo TRUE (booleano) pero poniendo el operador logico NOT o (!) da vuelta el sentido, osea que va a devolver FALSE. 

// function negacion(permiso){
//     if (permiso !== true ) console.log ("tiene permiso")
// }

// negacion()






// Conjuncion o AND. Es el operador "y" en español (&&) nos permiten conjugar 2 o mas condiciones al mismo tiempo. Por ejemplo: un numero mayor a 5 pero menor que . UNA NOTA IMPORTANTE. SI UNA DE ESTAS CONDICIONES QUE IMPONEMOS NO SE DA, TODO EL CONJUNTO DE CONDICIONES SERA FALSO. POR ESO EN EL ULTIMO EJEMPLO NOS DA FALSE. PORQUE SI BIEN EL 7 ES MAYOR A 5 Y MENOR A 10. NO ES PAR, POR ESO ES FALSE. 



// function mayorYMenor(num){
//     if (num >= 5 && num <= 10){console.log(true)}
//     else (console.log(false))
// }
// mayorYMenor(10)

// //Agregamos una condicion de par. 

// function mayorYMenorYPar(num){
//     if (num >= 5 && num <= 10 && num % 2===0){console.log(true)}
//     else (console.log(false))
// }
// mayorYMenorYPar(8)

// Permiten controlar el flujo de nuestro codigo. Por ejemplo, Si esta lloviendo, entonces me voy a quedar en la cama mirando series. (Debemos evaluar si la condicion lloviendo es verdadera para ejecutar la funcion.)




// Disyuncion o OR. Este comparador funciona de la misma manera que el &&, pero no es eliminatorio por asi decirlo. Este funciona de la siguiente manera. Si la primera condicion no se da, se va a la segunda y asi sucesivamente hasta que cumpla una de las condiciones o si no cumple con ninguna, sera el caso contrario. EJEMPLO:

// function operadorOr(str){
//     if(str === "Henry" || str.length<2) console.log(true)
//     else console.log(false)
// }

// operadorOr("Henry")
// operadorOr("henry")
// operadorOr("JavaScript")
// operadorOr("h")
// operadorOr("Hg")



// CONBINACION ENTRE TODAS

function combinacion(num){
    if (num > 9 && num % 2===0 || num === 3)console.log ("si es verdad")
    else console.log ("no es verdad")
}

combinacion(3);
combinacion(10);
combinacion(12);
combinacion(5);
combinacion(11)
