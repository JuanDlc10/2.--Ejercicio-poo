"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre, nacionalidad, correo) {
        this.nombre = nombre;
        this.Nacionalidad = nacionalidad;
        this.email = correo;
    }
    Persona.prototype.imprimirNombre = function () {
        return "Hola tu nombre es: " + this.nombre;
    };
    Persona.prototype.nacion = function () {
        return "Tu nacionalidad es:" + this.Nacionalidad;
    };
    Persona.prototype.correo = function () {
        return "Tu email es:" + this.email;
    };
    return Persona;
}());
var Nombre = prompt("introduce tu nombre");
var nacion = prompt("Introduce tu nacionalidad");
var correo = prompt("Introduce tu email");
var persona = new Persona(Nombre, nacion, correo);
console.log(persona.imprimirNombre() + "\n" + persona.nacion() + "\n" + persona.correo());
