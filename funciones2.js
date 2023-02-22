function cuidadoConElConsolelog(nombre){
    console.log(nombre)
}; 


function otraFuncion() {
    return(
        "El nombre retorinada por la funcion 'cuidadoConElConsolelog' es " + cuidadoConElConsolelog("ALEX")
    );
}

function cuidadoConElReturn(){
    return nombre
    console.log(nombre) //todo lo que se colaca despues del retorn no se va a mostrar ni en el codigo ni en el retorno. El codigo se interpreta que solo hasta ahi se lee. 
}