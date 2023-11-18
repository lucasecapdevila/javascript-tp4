//* Ejercicio adicional

/*
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión",
y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con
diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona{
  constructor(nombre, edad, profesion){
    this._nombre = nombre
    this._edad = edad
    this._profesion = profesion
  }

  get nombre(){
    return this._nombre
  }
  set nombre(nuevoNombre){
    return this._nombre = nuevoNombre
  }

  get edad(){
    return this._edad
  }
  set edad(nuevaEdad){
    return this._edad = nuevaEdad
  }

  get profesion(){
    return this._profesion
  }
  set profesion(nuevaProfesion){
    return this._profesion = nuevaProfesion
  }

  saludar(){
    document.write(`<p>Hola ! Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}</p>`)
  }

  despedirse(){
    document.write('<p>Hasta pronto !</p>')
  }
}

const persona1 = new Persona('Alvaro', 35, 'abogado')
persona1.saludar()
persona1.despedirse()

const persona2 = new Persona('Agustin', 31, 'médico')
persona2.saludar()
persona2.despedirse()