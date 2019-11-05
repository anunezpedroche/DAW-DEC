var celdas = new Array(9);

function init(){

    pintarMapa();
}

function pintarMapa(){
    for(var i=0;i<9;i++){

    let divs = document.createElement('div');
        divs.classList.add("celda");
        document.querySelector("#mapa").appendChild(divs);
    }
}


window.onload=init();
