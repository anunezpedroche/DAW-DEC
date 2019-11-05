let coma = false;
let num1 = 0;
let num2 = 0;

window.onload = function funcion (){
    var x = document.getElementsByClassName("boton");
    var i;
    for(i=0;i<x.length;i++){
    x[i].addEventListener("click",calculadora);
    }
 
}

function calculadora(){
    var v = this.innerText;
    console.log(v);
    var p = document.querySelector(".pantalla input");
    if(v=="x"){
        p.value += "*";
        coma=false;
    }

    if(v=="()"){
        p.value = "("+p.value+")";
        coma=false;
    }   
    if(p.value==0){
        if(v=="."&&coma==false){
            p.value = p.value+".";
            coma=true;
        }else{
            p.value = v;
        }
    }else if(p.value!=0&&v!="="&&v!="x"&&v!="()"&&v!="."&&v!="%"&&v!="«"){
            p.value += v;
            console.log(p.value);
    }
    if(v =="C"){
        p.value="0";
        coma=false;
    }
    
    if(v=="."&&coma==false){
        p.value = p.value+".";
        coma=true;
    }
    if(v =="="){
        if(num1!=0){
            num2 = p.value;
            p.value = (num1/num2)*100;
        }else{
        p.value = eval(p.value);
    }
    }
    if(v =="+"){
        coma=false;
    }
    if(v =="-"){
        coma=false;
    }
    if(v =="/"){
        coma=false;
    }
    if(v =="%"){
            num1 = p.value;
            p.value = 0;
    }
    if(v == "«"){
        p.value = p.value.slice(0,-1);
    }
    if(p.value==""){
        p.value=0;
    }
}