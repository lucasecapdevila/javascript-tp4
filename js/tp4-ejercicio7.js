//*  Agenda telefónica
/*
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera
que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos.
Se podrá crear de dos formas, indicando nosotros el tamaño o con
un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

  -aniadirContacto(Contacto): Añade un contacto a la agenda,
si la agenda no puede almacenar más contactos indicar por pantalla.
  -existeContacto(Contacto): indica si el contacto pasado existe o no.
  -listarContactos(): Lista toda la agenda
  -buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
  -eliminarContacto(Contacto): elimina el contacto de la agenda, indica si
se ha eliminado o no por pantalla.
  -agendaLlena(): indica si la agenda está llena.
  -huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt,
las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en
pantalla y por consola.
*/

class Contacto{
  constructor(nombre, telefono){
    this._nombre = nombre
    this._telefono = telefono
  }

  get nombre(){
    return this._nombre
  }

  set nombre(nuevoNombre){
    this._nombre = nuevoNombre
  }

  get telefono(){
    return this._telefono
  }

  set telefono(nuevoTelefono){
    this._telefono = nuevoTelefono
  }
}


class Agenda{
  constructor(){
    this.contactos = []
    this.cantidad = 10
  }

  aniadirContacto(contacto){
    document.write('<h2>Añadir contacto</h2>')
    if(this.agendaLlena()){
      this.agendaLlena()
    } else{
      this.contactos.push(contacto)
      document.write(`<p>Se añadió el contacto ${contacto.nombre} exitosamente</p>`)
      console.log(`Se añadió el contacto ${contacto.nombre} exitosamente`)
    }
    document.write('<hr>')
  }

  existeContacto(contacto){
    let contactoExistente = this.contactos.some(cont => cont.nombre === contacto.nombre)
    document.write('<h2>Contacto existente</h2>')
    if(contactoExistente){
      document.write(`El contacto ${contacto.nombre} se encuentra en la agenda.`)
      console.log(`El contacto ${contacto.nombre} se encuentra en la agenda.`);
    } else{
      document.write('El contacto buscado no existe en la agenda.')
      console.log('El contacto buscado no existe en la agenda.');
    }
    document.write('<hr>')
  }
  
  listarContactos(){
    document.write('<h2>Lista de contactos:</h2>')
    if(this.contactos.length === 0){
      document.write('<p>No hay contactos en la agenda.</p>')
      console.log('No hay contactos en la agenda.');
    } else{
      document.write('<ul>')
      this.contactos.forEach(contacto => {
        document.write(`<li>Nombre: ${contacto.nombre}. Teléfono: ${contacto.telefono}</li>`)
        console.log(`Nombre: ${contacto.nombre}. Teléfono: ${contacto.telefono}`)
      })
      document.write('</ul>')
    }
    document.write('<hr>')
  }
  
  buscarContacto(nombre){
    document.write('<h2>Buscar contacto:</h2>')
    let contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre)
    if (contactoEncontrado){
      document.write(`<p>Contacto encontrado: ${nombre} - ${contactoEncontrado.telefono}</p>`)
      console.log(`Contacto encontrado: ${nombre} - ${contactoEncontrado.telefono}`)
    } else{
      document.write(`<p>No se encontró el contacto ${nombre}</p>`)
      console.log(`No se encontró el contacto ${nombre}`);
    }
    document.write('<hr>')
  }
  
  eliminarContacto(contacto){
    let i = this.contactos.findIndex(cont => cont.nombre === contacto.nombre)
    document.write('<h2>Eliminar contacto</h2>')
    if(i !== -1){
      this.contactos.splice(i, 1)
      document.write(`<p>Se eliminó el contacto ${contacto.nombre}</p>`)
      console.log(`Se eliminó el contacto ${contacto.nombre}`);
    } else{
      document.write(`<p>No se encontró el contacto ${contacto.nombre}</p>`)
      console.log(`No se encontró el contacto ${contacto.nombre}`)
    }
    document.write('<hr>')
  }

  agendaLlena(){
    if(this.contactos.length >= this.cantidad){
      document.write('<h2>Agenda llena</h2>')
      document.write('<p>La agenda se encuentra llena</p>')
    } else{
      agenda.huecosLibres()
    }
    document.write('<hr>')
  }

  huecosLibres(){
    let disponible = this.cantidad - this.contactos.length
    document.write('<h2>Huecos libres</h2>')
    if(disponible === 0){
      agenda.agendaLlena()
    } else{
      document.write(`<p>Hay ${disponible} lugares libres.</p>`)
      console.log(`Hay ${disponible} lugares libres.`)
    }
    document.write('<hr>')
  }
}

let agenda = new Agenda()
document.write('<h1>AGENDA</h1>')

let menu = `1) Añadir contacto\n2) Verificar si existe un contacto\n3) Ver lista de contactos\n4) Buscar contacto\n5) Eliminar contacto\n6) Verificar si la agenda está llena\n7) Consultar cuantos lugares hay disponibles\n8) Salir`
let opcion

do{
  opcion = parseInt(prompt(menu))
  switch(opcion){
    case 1:
      let nombre1 = prompt('Ingrese el nombre del contacto')
      let telefono1 = parseInt(prompt('Ingrese el teléfono del contacto'))
      let contacto1 = new Contacto(nombre1, telefono1)
      agenda.aniadirContacto(contacto1)
      break;
    case 2:
      let nombre2 = prompt('Ingrese el nombre del contacto a verificar')
      let contacto2 = new Contacto(nombre2, '')
      agenda.existeContacto(contacto2)
      break;
    case 3:
      agenda.listarContactos()
      break;      
    case 4:
      let nombre4 = prompt('Ingrese el nombre del contacto que desea buscar')
      agenda.buscarContacto(nombre4)
      break;      
    case 5:
      let nombre5 = prompt('Ingrese el nombre del contacto que desea eliminar')
      let contacto5 = new Contacto(nombre5, '')
      agenda.eliminarContacto(contacto5)
      break;      
    case 6:
      agenda.agendaLlena()
      break;      
    case 7:
      agenda.huecosLibres()
      break;      
    case 8:
      alert('Saliste del menú')
      break;
    default:
      alert('Opción no válida')
      console.log('Opción no válida');
  }
} while(opcion !==8)