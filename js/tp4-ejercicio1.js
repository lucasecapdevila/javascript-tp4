/*
Crear objetos
1- Crea un objeto llamado auto que tenga algunas características como el
color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios
para permitir encender y apagar el auto.

Output:

objeto.encender();		auto encendido
objeto.apadar()		El auto se apagó
*/

const auto = {
  color: 'rojo',
  marca: 'Ford',
  modelo: 2022,
  
  encenderAuto: function (){
    document.write(`<p>Auto encendido</p>`)
  },  
  apagarAuto: function (){
    document.write(`<p>El auto se apagó</p>`)
  }
}

auto.encenderAuto()
auto.apagarAuto()