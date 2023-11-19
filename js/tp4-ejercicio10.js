/*
10- Crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo
Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y
devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino,
lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero
suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un
mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos
aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión
y usar el método abordar.
*/

class Aeropuerto{
  constructor(nombreAeropuerto, aviones){
    this._nombreAeropuerto = nombreAeropuerto
    this._aviones = aviones
  }

  get nombreAeropuerto(){
    return this._nombreAeropuerto
  }
  
  set nombreAeropuerto (nuevoNombreAeropuerto){
    this.nombreAeropuerto = nuevoNombreAeropuerto
  }  
  
  get aviones(){
    return this._aviones
  }
  
  set aviones (nuevosAviones){
    this.aviones = nuevosAviones
  }

  agregarAvion(avion){
    this.aviones.push(avion)
  }

  buscarAvion(nombre){
    document.write(`<h2>Buscar avión:</h2>`)
    let avionEncontrado = this.aviones.find(avion => avion.nombre === nombre)
    if(avionEncontrado){
      document.write(`<p>El avión ${nombre} fue encontrado exitosamente.</p>`)
    } else{
      document.write('<p>El avión solicitado no se encontró</p>')
    }
    document.write('<hr>')
  }
}

class Avion{
  constructor(nombre, capacidad, destino, listaPasajeros){
    this._nombre = nombre
    this._capacidad = capacidad
    this._destino = destino
    this._listaPasajeros = listaPasajeros
  }
  
  get nombre(){
    return this._nombre
  }
  
  set nombre(nuevoNombre){
    this._nombre = nuevoNombre
  }
  
  get capacidad(){
    return this._capacidad
  }
  
  set capacidad(nuevaCapacidad){
    this._capacidad = nuevaCapacidad
  }
  
  get destino(){
    return this._destino
  }
  
  set destino(nuevoDestino){
    this._destino = nuevoDestino
  }
  
  get listaPasajeros(){
    return this._listaPasajeros
  }
  
  set listaPasajeros(nuevaListaPasajeros){
    this._listaPasajeros = nuevaListaPasajeros
  }
  
  abordar(nombre){
    document.write(`<h2>Abordaje de pasajeros:</h2>`)
    if(this.capacidad > this.listaPasajeros.length){
      this.listaPasajeros.push(nombre)
      document.write(`<p>El pasajero ${nombre} abordó exitosamente</p>`)
    } else{
      document.write('No se pudo realizar el abordaje. Avión lleno');
    }
    document.write('<hr>')
  }
}

const aeropuertoInternacional = new Aeropuerto('Benjamín Matienzo', [])
const avion1 = new Avion('Boeing 747', 5, 'Aeroparque', ['A', 'B', 'C', 'D'])
const avion2 = new Avion('Boeing 787 Dreamliner', 5, 'Córdoba', [])
const avion3 = new Avion('Airbus A320', 5, 'Bariloche', [])

document.write(`<h1>Aeropuerto Internacional Tte. Gral. Benjamín Matienzo</h1>`)
aeropuertoInternacional.aviones.push(avion1, avion2, avion3);
aeropuertoInternacional.buscarAvion('Boeing 747')
aeropuertoInternacional.buscarAvion('Jay-Jay el avioncito')
avion1.abordar('Lucas')
avion1.abordar('Juan')