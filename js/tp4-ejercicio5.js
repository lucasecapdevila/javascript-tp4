//* Generaciones
/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
  -mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación
  pertenece la persona creada y cual es el rasgo característico de esta generación (Para
  realizar este método tener en cuenta la tabla de generaciones (en img)).
  -esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
  persona es mayor de edad.
  -mostrarDatos: devuelve toda la información del objeto.
  -generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona{
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento, nacionalidad){
    this.nombre = nombre
    this.edad = edad
    this.dni = dni
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
    this.anioNacimiento = anioNacimiento
    this.nacionalidad = nacionalidad
  }

  mostrarGeneracion(){
    document.write('<h2>Generación</h2>')
    if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
      document.write(`
        <p>La persona pertenece a la Generación Silent Generation</p>
        <p>Rasgo característico: Austeridad</p>
        `);
    } else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
      document.write(`
        <p>La persona pertenece a la Generación Baby boom</p>
        <p>Rasgo característico: Ambición</p>
        `);        
    } else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
      document.write(`
        <p>La persona pertenece a la Generación X</p>
        <p>Rasgo característico: Obsesión por el éxito</p>
        `);
    } else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
      document.write(`
        <p>La persona pertenece a la Generación Y</p>
        <p>Rasgo característico: Frustración</p>
        `);
    } else if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
      document.write(`
        <p>La persona pertenece a la Generación Z</p>
        <p>Rasgo característico: Irreverencia</p>
        `);
    } else{
      document.write('La persona no pertenece a una generación en específico o se ingresó un valor inválido.');
    }
    document.write('<hr>')
  }

  esMayorDeEdad(){
    document.write('<h2>Mayoría de edad</h2>')
    if (this.edad >= 18) {
      document.write('<p>La persona es mayor de edad</p>')
    } else {
      document.write('<p>La persona es menor de edad</p>')
    }
    document.write('<hr>')
  }

  mostrarDatos(){
    document.write(`
      <h2>Persona: ${this.nombre}</h2>
      <ul>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Sexo: ${this.sexo}</li>
        <li>Peso: ${this.peso}kg</li>
        <li>Altura: ${this.altura}cm</li>
        <li>Año de Nacimiento: ${this.anioNacimiento}</li>
        <li>Nacionalidad: ${this.nacionalidad}</li>
      </ul>
      <hr>
    `)
  }

  generarDNI(){
    this.dni = Math.floor(Math.random() * 99999999) + 1
    document.write(`Nuevo DNI generado: ${this.dni} `)
  }
}

let anioNacimiento = parseInt(prompt('Ingrese su año de nacimiento'))

const juan = new Persona('Juan', 29, 12345678, 'H', 80, 170, anioNacimiento, 'argentino')
juan.mostrarDatos()
juan.esMayorDeEdad()
juan.mostrarGeneracion()
juan.generarDNI()