import Cliente from './cliente.js';
import Libro from './libro.js';
console.log("Trabajando");
let c1 = new Cliente();
let l1 = new Libro();

c1.setnombre("Pedro");
c1.setdni("52w3425");
c1.setdireccion("Calle falsa");
c1.settelefono(345346356);
l1.setAutor("Mr.Bourbon");
l1.setIsbn("234234364");
l1.setTitutlo("El whisky es bueno");
l1.setPais("Irlanda");

console.log("El nombre del cliente es "+c1.getnombre());