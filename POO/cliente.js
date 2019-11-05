export default class Cliente{
    constructor(nombre,direccion,dni,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.dni = dni;
        this.telefono = telefono;
    }

    setnombre(v){
        this.nombre=v;
    }
    setdireccion(d){
        this.direccion=d;
    }
    setdni(x){
        this.dni=x;
    }
    settelefono(t){
        this.telefono=t;
    }
    getnombre(){
        return this.nombre;
    }
    getdireccion(){
        return this.direccion;
    }
    getdni(){
        return this.dni;
    }
    gettelefono(){
        return this.telefono;
    }
}
