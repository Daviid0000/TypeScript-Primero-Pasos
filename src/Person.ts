import Ipersona from "./Interface"

class Persona implements Ipersona{
    public nombre : string
    public apellido : string
    public edad : number
    public dni : string

    constructor(nombre: string, apellido: string, edad: number, dni: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad
        this.dni = dni;
    }
}

const persona1 = new Persona("Valeria", "Ordinola", 17, "31341453")

console.log(`Hola, soy ${persona1.nombre} ${persona1.apellido} tengo ${persona1.edad} años `)