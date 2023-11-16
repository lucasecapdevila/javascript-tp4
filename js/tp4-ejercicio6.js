//* Libros 
/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
    -ISBN
    -Título
    -Autor
    -Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro
con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{
  constructor(isbn, titulo, autor, numPaginas){
    this._isbn = isbn
    this._titulo = titulo
    this._autor = autor
    this._numPaginas = numPaginas
  }

  get isbn(){
    return this._isbn
  }

  set isbn(nuevaISBN){
    this._isbn = nuevaISBN
  }

  get titulo(){
    return this._titulo
  }

  set titulo(nuevoTitlo){
    this._titulo = nuevoTitlo
  }

  get autor(){
    return this._autor
  }

  set autor(nuevoAutor){
    this._autor = nuevoAutor
  }

  get numPaginas(){
    return this._numPaginas
  }

  set numPaginas(nuevoNumPaginas){
    this._numPaginas = nuevoNumPaginas
  }

  mostrarLibro(){
    document.write(`
      <p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.</p>
    `)
  }
}

const harryPotter = new Libro('10: 8478884459', 'Harry Potter y la piedra filosofal', 'J.K. Rowling', 256)
const cancionHieloYFuego = new Libro('10: 8496208494', 'Canción de Hielo y Fuego - Juego de Tronos', 'George R.R. Martin', 800)

harryPotter.mostrarLibro()
cancionHieloYFuego.mostrarLibro()

if(harryPotter.numPaginas > cancionHieloYFuego.numPaginas){
  document.write(`El libro ${harryPotter.titulo} tiene más páginas que el libro ${cancionHieloYFuego.titulo}`)
} else if (harryPotter.numPaginas < cancionHieloYFuego.numPaginas){
  document.write(`El libro ${cancionHieloYFuego.titulo} tiene más páginas que el libro ${harryPotter.titulo}`);
} else{
  document.write(`Los libros ${harryPotter.titulo} y ${cancionHieloYFuego.titulo} tienen la misma cantidad de páginas.`)
}