interface CamisetaBase{
    setColor(color);
    getColor();
}
class Camiseta {
    public color: string;
    public modelo: string;
    public talla: string;
    public precio: number;
    public marca: number;
    constructor(color, modelo, talla, precio, marca) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
        this.marca = marca;
    }
    setColor(color){
        this.color = color;
    }
    getColor():string{
        return this.color;
    }
}

class Sudadera extends Camiseta{
    public aditional:string;
    setAditional(aditional){
        this.aditional = aditional;
    }
    getAditional():string{
        return this.aditional;
    }
}

var sudadera = new Sudadera("rojo",'con buzo','s',2,'nike');
sudadera.setColor('verde')
console.log(sudadera);