function esPositivo(num) {
    // La función recibe un entero. Devuelve como resultado un string que indica si el número
    // es positivo o negativo.
    // Si el número es positivo ---> "Es positivo".
    // Si el número es negativo ---> "Es negativo".
    // Si el número es 0, devuelve false.
    // Tu código:
    var signo
    signo = Math.sign(num)
    if (signo>0){
       return "Es positivo"
    } else if (signo < 0){
       return "Es negativo" 
    } else if (signo === 0 ){
       return false
    }
 }
 //-----------------------------------------------------------------
 function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final del string "str" y retórnalo
    // Ejemplo: "hello world" ---> "hello world!"
    // Tu código:
    return str + "!"
 } // No hay que complicarse tanto. Si te dicen que debes concatenar solo un simbolo, haz solo eso. No crees variables que ni van 
 