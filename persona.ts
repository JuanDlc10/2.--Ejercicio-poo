class Persona {
    nombre : string;
    apellido : string;
    Nacionalidad : string;
    email : string;
    constructor (nombre : string, nacionalidad : string, correo : string){
        this.nombre = nombre;
        this.Nacionalidad = nacionalidad;
        this.email = correo;
    }
    public imprimirNombre() : string {
        return "Hola tu nombre es: " + this.nombre;
    }
    public nacion() : string{
        return "Tu nacionalidad es:" + this.Nacionalidad;
    }
    public correo() : string{
        return "Tu email es:" + this.email;
    }
}
let Nombre : any = prompt("introduce tu nombre");
let nacion : any = prompt("Introduce tu nacionalidad")
let correo : any = prompt("Introduce tu email")
const persona = new Persona(Nombre,nacion,correo);
console.log(persona.imprimirNombre() + "\n" + persona.nacion() + "\n" + persona.correo());

