//Exiten otros objetos que son globales como console.log. Otro de esllos es Math, este tiene varios usos. 

//Primer uso. Math.pow. se ocupa de la potencia de un numero. por ejeplo 2 elevado al cubo. Math.pow (2, 3)  ( El primer numero sera la base, en este caso el 2 y el segundo numero sera la potencias. En este caso el 3. )

var potencia = Math.pow(2 , 3)

console.log (potencia)

//Segundo uso. a)Math.round. Muchas veces el resultado de una operacion nos va a dar un numeros decimales. Para esto, mucahs veces se redondea al resultado mas proximo. por ejmplo. Math.round redondea al entero mas proximo, por ejemplo: 3,49 nos redondeara al 3, mientras que 3,50 rendodeara al 4.

var redondeoMin = Math.round (0.49)
console.log (redondeoMin)

var redondeoMax = Math.round (0.50)
console.log (redondeoMax)

// Segundo uso. b) Math.floor. Este funciona de la misma manera, solo que rendodeara al entero de menor valor. Por ejemplo: 5,93 se redondeara a 5.

var redondeoFoor = Math.floor (0.93)
console.log (redondeoFoor)

// Segundo uso. c) Math.ceil. Este metodo funciona al reves que el math.floor. Redondeara al entero de mayor valor. Ejemplo: 5,27 redondeara a 6. 

var redondeoCeil = Math.ceil(4.27)
console.log (redondeoCeil)

// Tercer uso. Math.max y Math.min. Nos permiten ver el maximo y el minimo correspondiente en un conjunto de numeros. 

var numersoMax = Math.max ( 1, 2, 3, 4, 5)
console.log(numersoMax)

var numerosMin = Math.min ( 1, 2, 3, 4, 5)
console.log (numerosMin)

// Cuarto uso. Math.ramdom. Genera un numero random, decimal y vas desde el 0 y el 1. 

var random = Math.random( );
console.log(random)