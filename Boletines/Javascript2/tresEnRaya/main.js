var celdas = new Array(9);
let cuenta = 0;
let b = 4;
function init() {
    pintarMapa();
}

function pintarMapa() {
    for (var i = 0; i < 9; i++) {
        console.log("hola");
        let divs = document.createElement('div');
        divs.classList.add('celda');
        document.querySelector('#mapa').appendChild(divs);
    }
    let celda = document.querySelectorAll('.celda');
    celda.forEach(cas => cas.addEventListener('click', pintarCasilla));
}

function pintarCasilla() {
    //No hacer nada si ya está ocupado el cuadrado
    if(this.classList.contains("maq")||this.classList.contains("equis"))
    return;

    this.classList.add("equis");
    let maq = Math.floor(Math.random() * 9);
    let celda2 = document.querySelectorAll('.celda');

    //Si no está ocupado por el jugador, entonces lo ocupa la máquina.

    if (!celda2[maq].classList.contains("equis"))
        celda2[maq].classList.add("maq");
    
    //Comprobación horizontal

    for(var i=1;i<=7;i+=3){
        console.log(i);
        if(celda2[i+1].classList.contains("equis")&&celda2[i].classList.contains("equis")&&celda2[i-1].classList.contains("equis")){
            alert("you win motherfucker");
        }
    }

    //Comprobación vertical

    for(var a = 3;a<=5;a++){
        if(celda2[a+3].classList.contains("equis")&&celda2[a].classList.contains("equis")&&celda2[a-3].classList.contains("equis")){
            alert("you win motherfucker");
        }
    }

    //Comprobación esquinas
    
    if(celda2[b+4].classList.contains("equis")&&celda2[b].classList.contains("equis")&&celda2[b-4].classList.contains("equis")||celda2[b+2].classList.contains("equis")&&celda2[b].classList.contains("equis")&&celda2[b-2].classList.contains("equis")){
        alert("you win motherfucker");
    }

    //Comprobación perder
    
    for(var i=1;i<=7;i+=3){
        console.log(i);
        if(celda2[i+1].classList.contains("maq")&&celda2[i].classList.contains("maq")&&celda2[i-1].classList.contains("maq")){
            alert("you lose motherfucker");
        }
    }

    //Comprobación vertical perder

    for(var a = 3;a<=5;a++){
        if(celda2[a+3].classList.contains("maq")&&celda2[a].classList.contains("maq")&&celda2[a-3].classList.contains("maq")){
            alert("you lose motherfucker");
        }
    }

    //Comprobación esquinas perder
    
    if(celda2[b+4].classList.contains("maq")&&celda2[b].classList.contains("maq")&&celda2[b-4].classList.contains("maq")||celda2[b+2].classList.contains("maq")&&celda2[b].classList.contains("maq")&&celda2[b-2].classList.contains("maq")){
        alert("you lose motherfucker");
    }

}
// falta }
window.onload = init; // sobran los parentesis