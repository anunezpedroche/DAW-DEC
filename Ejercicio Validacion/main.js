var validacionNombre = 0;
var validacionApellido= 0;
var validacionMail= 0;
var validacionPassword= 0;
var validacionRPassword = 0;
var validacionDni= 0;
var validacionIpEquipo = 0;
var arrValidacion = new Array();

function validarNombre(e){
    patternName = /[0-9]/g;
    if(patternName.test(e.value)){
        e.style.background="red";
        arrValidacion[0] = false;
    }else{
        e.style.background="";
        arrValidacion[0] = true;
    }
}
function validarApellidos(e){
    patternSurName = /[0-9]/g;
    
    if(patternSurName.test(e.value)){
        e.style.background="red";
        arrValidacion[1] = false;
    }else{
        e.style.background="";
        arrValidacion[1] = true;
    }
}
function validarMail(e){
    patternMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

    if(patternMail.test(e.value)){
        e.style.background="";
        arrValidacion[2] = true;
    }else{
        e.style.background="red";
        arrValidacion[2] = false;
    }
}
function validarDni(e){
    patternDni = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;

    if(patternDni.test(e.value)){
        e.style.background="";
        arrValidacion[3] = true;
    }else{
        e.style.background="red";
        arrValidacion[3] = false;
    }
}
function validarPassword(p){
    patternPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/g;

    if(patternPassword.test(p.value)){
        p.style.background="";
        arrValidacion[4] = true;
    }else{
        p.style.background="red";
        arrValidacion[4] = false;
    }
}
function validarRPassword(rp){

    p = p.value;
    rp = rp.value;

    if(p!=rp){
        rp.style.background="red";
        arrValidacion[5] = false;
    }else{
        rp.style.background="";
        arrValidacion[5] = true;
    }
}

function validarIpEquipo(e){
    patternIpEquipo = /[0-9]/g;

    if(patternIpEquipo.test(e.value)){
        e.style.background="red";
        arrValidacion[6] = false;
    }else{
        e.style.background="";
        arrValidacion[6] = true;
    }
}
function validarFormulario(){
        
        if(arrValidacion[0]==false){
            console.log("El campo nombre está mal");
        }
        if(arrValidacion[1]==false){
            console.log("El campo apellido está mal");
        }
        if(arrValidacion[2]==false){
            console.log("El campo mail está mal");
        }
        if(arrValidacion[3]==false){
            console.log("El campo dni está mal");
        }
        if(arrValidacion[4]==false){
            console.log("El campo password está mal");
        }
        if(arrValidacion[5]==false){
            console.log("El campo repetir password está mal");
        }
        if(arrValidacion[6]==false){
            console.log("El campo IP Equipo está mal");
        }
        x = arrValidacion.indexOf(false);
        if(x == -1){
            console.log("Todo correcto");
        }

}