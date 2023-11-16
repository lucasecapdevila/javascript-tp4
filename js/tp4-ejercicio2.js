/*
Modelando clases
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  -Una propiedad titular con el valor "Alex".
  -Una propiedad saldo, teniendo como valor inicial 0.
  -Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como
  parámetro
  -Un método extraer() que permita retirar la cantidad pasada como parámetro.
  -Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
*/

let ingresadoPorUsuario = parseInt(prompt('¿Cuánto dinero desea ingresar?'))
let extraidoPorUsuario = parseInt(prompt('¿Cuánto dinero desea extraer?'))

const cuenta = {
  titular: 'Alex',
  saldo: 0,

  ingresar: (cantidadIngresada) => {
    if(!isNaN(ingresadoPorUsuario) && ingresadoPorUsuario >= 1){
      cuenta.saldo += cantidadIngresada
      return cuenta.saldo
    } else{
      alert('El valor ingresado es incorrecto.')
    }
  },

  extraer: (cantidadRetirar) => {
    if(!isNaN(extraidoPorUsuario) && extraidoPorUsuario <= cuenta.saldo){
      cuenta.saldo -= cantidadRetirar
      return cuenta.saldo
    } else{
      alert('El valor ingresado es incorrecto.')
    }
  },

  informar(){
    let estadoDeCuenta = document.write(`
      <p>El titular de la cuenta es ${this.titular}. El saldo es ${this.saldo}</p>
    `)
    return estadoDeCuenta
  }
}

cuenta.informar()
cuenta.ingresar(ingresadoPorUsuario)
cuenta.informar()
cuenta.extraer(extraidoPorUsuario)
cuenta.informar()