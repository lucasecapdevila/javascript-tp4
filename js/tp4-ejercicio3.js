//* Rectángulos
/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades
de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades,
calcular el perímetro y el área.
*/

let alturaUsuario = parseInt(prompt('Ingrese la altura del rectángulo.'))
let anchoUsuario = parseInt(prompt('Ingrese el ancho del rectángulo.'))

class Rectangulo{
  constructor(altura, ancho){
    this._altura = altura
    this._ancho = ancho
  }
  
  get altura(){
    return this._altura
  }
  
  set altura(nuevoAltura){
    if(nuevoAltura >= 1){
      this._altura = nuevoAltura
    } else{
      alert('La altura debe ser igual o mayor a 1.')
    }
  }

  get ancho(){
    return this._ancho
  }

  set ancho(nuevoAncho){
    if(nuevoAncho >= 1){
      this._ancho = nuevoAncho
    } else{
      alert('El ancho debe ser igual o mayor a 1.')
    }
  }

  mostrarDatos(){
    document.write(`
      <h2>Rectángulo</h2>
      <ul>
        <li>Altura: ${this.altura}</li>
        <li>Ancho: ${this.ancho}</li>
        <li>Perímetro: ${this.calcularPerimetro(alturaUsuario, anchoUsuario)}</li>
        <li>Area: ${this.calcularArea(alturaUsuario, anchoUsuario)}</li>
      </ul>
    `)
  }

  calcularPerimetro(altura, ancho){
    let perimetro = 2 * (altura + ancho)
    return perimetro
  }

  calcularArea(altura, ancho){
    let area = altura * ancho
    return area
  }
}

const rectangulo1 = new Rectangulo(alturaUsuario, anchoUsuario)
rectangulo1.mostrarDatos()
alturaUsuario = parseInt(prompt('Ingrese la nueva altura del rectángulo.'))
anchoUsuario = parseInt(prompt('Ingrese el nuevo ancho del rectángulo.'))
rectangulo1.altura = alturaUsuario
rectangulo1.ancho = anchoUsuario
rectangulo1.mostrarDatos()