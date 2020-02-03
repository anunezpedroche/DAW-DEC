let url = 'http://192.168.1.144:8000/AJAX/Examen19/got.json';

function recuperarJSON() {
    return fetch(url).then(
        response => response.json())
        .then(got => {
            crearPlantilla(got);
        });
}

function crearPlantilla(gotJSON){
    let divPrincipal = document.querySelector('#contenedorFotos');
    gotJSON.got.forEach(personaje => {
        divPrincipal.innerHTML+=`
        <div class="col-xs-6 col-sm-3 contenedorJuego" id="${personaje.nombre}" draggable="true">
        <img class="img-thumbnail" id="${personaje.familia}" src="${personaje.imagen}" draggable="false" ></img>
        <select class="form-control">
        <option>Selecciona familia...</option>
        <option value="Casa Lannister">Casa Lannister</option>
        <option value="Casa Targaryen">Casa Targaryen</option>
        <option value="Casa Stark">Casa Stark</option>
        <option value="Casa Bolton">Casa Bolton</option>
        <option value="Casa Tyrell">Casa Tyrell</option>
        <option value="Casa Baratheon">Casa Baratheon</option>
        <option value="Casa Clegane">Casa Clegane</option>
        </select>
        </div>`;
    });
}

function allowDrop(ev){
    //Permitir que reciba elementos
    ev.preventDefault();
}

function dragStart(ev){
    //Indicamos qué valor y tipo de información vamos a arrrastrar. En este caso texto e Id del elemento
    ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev){

    console.log(ev);
    console.log(ev.dataTransfer.getData('text'));
    console.log(ev.target);

    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña
    ev.preventDefault();

    //Guardamos el elemento, llamado "text" en una viarable
    var data = ev.dataTransfer.getData("text");

    //Colgamos el elemento arrastrado y soltado en el nuevo destino.
    //Si esa caja ya tiene un elemento no se podrá soltar ahí
    if(!ev.target.draggable){
        ev.target.appendChild(document.getElementById(data));
    }
}

async function init(){
await recuperarJSON();
let contenedores = document.querySelectorAll(".contenedorJuego");
contenedores.forEach(adelante =>{
    adelante.addEventListener('dragstart',dragStart);
});

}

window.onload = init;