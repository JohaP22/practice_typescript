var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, talla, precio, marca) {
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
        this.marca = marca;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setAditional = function (aditional) {
        this.aditional = aditional;
    };
    Sudadera.prototype.getAditional = function () {
        return this.aditional;
    };
    return Sudadera;
}(Camiseta));
var sudadera = new Sudadera("rojo", 'con buzo', 's', 2, 'nike');
sudadera.setColor('verde');
console.log(sudadera);
