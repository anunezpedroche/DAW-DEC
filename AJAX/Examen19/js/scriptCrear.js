function init (){
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let casa = document.getElementById('casa');
    let padres = document.getElementById('padres');
    let titulo = document.getElementById('titulo');
    let imagen = document.getElementById('imagen');

    document.activeElement.addEventListener('focusout',comprobarVacio);
    document.querySelector('button').addEventListener('click',crearPersonajo);
}

function crearPersonajo(){
  
    if(nombre.value&&apellidos.value&&casa.value&&padres.value&&titulo.value&&titulo.value&&imagen.value){
    let contenedorFichas = document.getElementById('contenedorFichas');
    let img = document.createElement('img');
    img.src = imagen.value;
    img.classList.add('foto');
    let datos = document.createElement('div');
    datos.classList.add('datos');
    datos.innerHTML =
        `<div class="small cabecera">Nombre</div>
        <div class="medium cabecera">Apellidos</div>
        <div class="small dato">${nombre.value}</div>
        <div class="medium dato">${apellidos.value}</div>
        <div class="medium cabecera">Padres</div>
        <div class="small cabecera">Casa</div>
        <div class="medium dato">${padres.value}</div>
        <div class="small dato">${casa.value}</div>
        <div class="big cabecera">Título</div>
        <div class="big dato">${titulo.value}</div>`;
        contenedorFichas.appendChild(img);
        contenedorFichas.appendChild(datos);
    }
}

function comprobarVacio(e){
    let newId = "e"+e.target.id;
    let error = document.getElementById(`${newId}`);
    if(error==null){
        error = "";
    }
    if(e.target.value==""){
        error.style.visibility = 'visible';
    }else{
        error.style.visibility = 'hidden';
    }
}




window.onload = init;