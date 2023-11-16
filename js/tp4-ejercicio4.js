//* Producto
/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las
propiedades código, nombre y precio, además del método imprime datos, el cual escribe
por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de
los tres objetos instanciados.
*/

class Producto{
  constructor(codigo, nombre, precio){
    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio
  }

  mostrarDatos(){
    document.write(`
      <h2>Producto: ${this.nombre}</h2>
      <p>Código: ${this.codigo}</p>
      <p>Precio: ${this.precio}</p>
    `)
  }
}

const telefono = new Producto(Date.now(), 'Motorola G42', 100000)
const notebook = new Producto(Date.now(), 'Samsung Galaxy Book3 15.6', 150000)
const monitor = new Producto(Date.now(), 'Noblex Mk27x7100', 200000)

let productos = [telefono, notebook, monitor]
telefono.mostrarDatos()
monitor.mostrarDatos()
notebook.mostrarDatos()