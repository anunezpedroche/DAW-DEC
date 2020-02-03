function init (){
    let nombre = document.getElementById('nombre');
    let apellidos = document.getElementById('apellidos');
    let casa = document.getElementById('casa');
    let padres = document.getElementById('padres');
    let titulo = document.getElementById('titulo');
    let imagen = document.getElementById('imagen');

    document.activeElement.addEventListener('focusout',comprobarVacio);
    document
}

function crearPersonajo(){
    if(nombre&&apellidos&&casa&&padres&&titulo&&titulo&&imagen){
        console.log('hola');a
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