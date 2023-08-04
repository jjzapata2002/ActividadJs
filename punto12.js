let precio = (parseInt( prompt("ingrese el valor del articulo")))


const descuento = 0.20
const iva = 0.15
let piva= precio + (precio* iva)
let Apagar = piva- (piva* descuento)

console.log("el precio fue de" + precio + "con un iva de " + piva +"con un descuento del 20% y un valor total de" +Apagar)