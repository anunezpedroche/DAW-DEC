export default class Libro {
    constructor(titulo="",autor="",pais="",isbn=""){
        this.titulo = titulo;
        this.autor = autor;
        this.pais = pais;
        this.isbn = isbn;
    }

    setAutor(value=""){
        this.autor=value;
    }
    setTitutlo(value=""){
        this.titulo=titulo;
    }
    setPais(value=""){
        this.pais=pais;
    }
    setIsbn(value=""){
        this.isbn=isbn;
    }
    getAutor(){
        return this.autor;
    }
    getTitulo(){
        return this.titulo;
    }
    getPais(){
        return this.pais;
    }
    getIsbn(){
        return this.isbn;
    }
}