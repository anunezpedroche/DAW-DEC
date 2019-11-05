let arr;
let cont = 0;
let val;

cont = prompt('Introduzca número de elementos del array: '); 
arr = new Array(cont);
for(var i =0;i<cont;i++){
    val = prompt('Introduzca un número: ');
    arr.push(val);
}
console.log(Math.max(...arr));