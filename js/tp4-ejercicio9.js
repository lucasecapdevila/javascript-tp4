/*
9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el
método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que
hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea
dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos
"emitirSonido" para verificar que cada animal emite el sonido adecuado. 
*/

class Animal{
  constructor(nombre, edad){
    this._nombre = nombre
    this._edad = edad
  }

  get nombre(){
    return this._nombre
  }
  
  set nombre(nuevoNombre){
    this._nombre = nuevoNombre
  }
  
  get edad(){
    return this._edad
  }
  
  set edad(nuevaEdad){
    this._edad = nuevaEdad
  }
  
  emitirSonido(){
    document.write('')
  }
}

class Perro extends Animal{
  constructor (nombre, edad){
    super(nombre, edad)
  }
  
  get nombre(){
    return this._nombre
  }
  
  set nombre(nuevoNombre){
    this._nombre = nuevoNombre
  }
  
  get edad(){
    return this._edad
  }
  
  set edad(nuevaEdad){
    this._edad = nuevaEdad
  }

  emitirSonido(){
    document.write('<p>Guau guau !</p>')
  }
}

class Gato extends Animal{
  constructor (nombre, edad){
    super(nombre, edad)
  }
  
  get nombre(){
    return this._nombre
  }
  
  set nombre(nuevoNombre){
    this._nombre = nuevoNombre
  }
  
  get edad(){
    return this._edad
  }
  
  set edad(nuevaEdad){
    this._edad = nuevaEdad
  }

  emitirSonido(){
    document.write('<p>Miau miau !</p>')
  }
}

const perro = new Perro('Firulais', 7)
perro.emitirSonido()

const gato = new Gato('Michi', 5)
gato.emitirSonido()