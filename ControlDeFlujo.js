function viajar (destino){
    if (destino === "Brasil" ) {
        console.log("Gire a la derecha");
    } else if ( destino === "Argentina") {
        console.log ("Gire a la izquierda"); 
    } else {
        console.log("Nos Perdimos")
    }
}

//viajar ("Brasil")

//viajar ("ArgentinaCampeon")

//viajar ("chile")


function puedeManejar (edad) {
    if (edad >= 18 ) {
        console.log("Si puede");
    } else if (edad < 18 ) {
        console.log("No puede")
    }
}

puedeManejar (20)