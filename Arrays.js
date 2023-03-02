// /*Los arrelgos son datos que exiten en el mundo de js, como los numeros, valores booleanos, strings y demas. Nos permiten guardar y gestionar informacion, como nombres, datos de usuarios y demas. exiten 2 conceptos. 
// -ElEMENTOS: datos que hemos guardado, pero la cantidad.
// -INDICE: posicion de guardado, siempre empieza por el cero.

// LOS ELEMENTOS SON MAS QUE LOS INDICES. 


// Los arrays son objetos global dentro de Javascript, es decir, que todos los arreglos estan asociados a una serie de metodos. (METODOS: son funciones nativas o preestablecidas en los lenguages de porgramacion). Nos posibilitan la vida. 
// */


// var listaDeCompras=[];
// listaDeCompras[3] = "tomates"
// listaDeCompras[1] = "Lechugas"


// console.log(listaDeCompras); //1

// //para ver que es lo que tiene cada indice podemos crear una nueva variable que guarde el elemento y mostrarlo en un console.log

// var elementoDelArray = listaDeCompras[1]
// console.log(elementoDelArray) //2

// //Una herramienta que se usa es el .length. Que nos permite swabeer cuantos elementos tuene un arreglo. 

// console.log(listaDeCompras.length) //3

// // Metodos de ARRAYS. 

// var colores= ["Amarillo", "Azul"]

// colores.push("rojo")//SIRVE PARA AGREGAR ELEMENTOS AL FINAL DEL ARREGO

// colores.unshift("Verde")//CONTRARIO AL PUSH. AGREGA AL PRINCIPIO.

// colores.pop() //ELIMINA EL ULTIMO ELEMENTO
// colores.shift() //ELIMINA EL PRIMER 
// var incluyeVerde = colores.includes("Verde")// DETERMINA SI INCLUYE O NO DETERMINADO ELEMENTO. 

// console.log(colores)//4
// console.log(incluyeVerde) //5

// //Como saber si todos los elementos cumplen con una determinada condicion. Para esto se utiliza el .every

// var numero = [10 , 6, 8, 9]
// var cumplenCondicion = numero.every((num)=>{
//     return num > 5;
// })

// console.log(cumplenCondicion) //6

// // METODOS SPLIT Y JOIN. Este metodod nos perminte transformar stirngs en arreglos y viceversa

// var palabra = "Henri"
// var palabraSeparada = palabra.split("") //Nos separara cada una de las letras. 
// console.log(palabraSeparada) //7

// //Ahora corregiremos el error eliminando la ulitma letra con el .pop y agregando la letra con el push. 

// palabraSeparada.pop()

// console.log(palabraSeparada) // 8

// palabraSeparada.push("y")

// console.log(palabraSeparada) //9 

// //Como ya lo corregimos, volvemos a convertir el arreglo a string. creamos una nueva variable y asignamos a la vieja variable, en este caso, palabraSeparada 

// var palabraArreglada = palabraSeparada.join("")
// console.log(palabraArreglada) //10

// // Si quisieramos recorrer elemento por elemento usariamos el .FOREACH

// var numeros = [1, 2, 3, 4]
// numeros.forEach((num)=>console.log(num)) //11 ( 1 2 3 4)
// numeros.forEach((num)=>{
//     if (num===3){
//         console.log(num) //1.5
//     }
// }) //Con esto veremos un elemento en especifico

// //El anterior solo nos deja recorer, no modificar. Para modificar algo usaremos el MAP

// var masUno = numeros.map((num)=>{
//     return num + 1;
// })
// console.log(masUno)// 12


// //--------------------------------------------------------------------------------

// //BUCLES. Es una secuencia de instrucciones a la que se le asigna una condicion y se ejecutara hasta que la condicion asignada deje de cumplirse. Hasta ahora vamos a ver 2 FOR Y WHILE

// // For

// var arr= [1, 2, 3, 4, 5 ]

// for(var i = 0;i < arr.length; i++ ){
//     console.log(arr[i]) //13
// }


// por ejemplo uniendo todo lo anterior. Supongammos que nos dan para hacer una funcion que reciba un string y debemos ver si tiene una letra p. para eso debemos hacer lo siguiente.


// function encontrarLetraP(stirng){
//     var letras=stirng.split("") //Primero separamos las letras del string en elementos para recorerlos. 

//     for (var i = 0; i<letras.length; i++){   //Con esto, ya podemos recorer el string partido. (RECORDAR, declaramos i, las condiciones de i. )
//         if (letras[i]==="p"){ //Esto es para saber en cada ciclo si hay una p
//             console.log("Si contiene p")
//         }
//     }
// }

// encontrarLetraP("Javascript")
// encontrarLetraP("Henry")



//--------------------------------------------------------------------------------------------------------

//BUCLE WHILE

var arr =[]

while(arr.length < 5 ){
    arr.push("BOOM")
}

console.log(arr)