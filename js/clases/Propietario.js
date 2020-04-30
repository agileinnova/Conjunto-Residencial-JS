export default class Propietario{
    constructor(nombre, cedula, fecha_nacimiento, genero){
        this.nombre = nombre;
        this.documento = cedula;
        this.fecha_nacimiento = fecha_nacimiento;
        this.genero = genero;
    }
    
    setNombre(nombre){
        this.nombre = nombre;
    }
    
    getNombre(){
        return this.nombre;
    }
    
}

//export default Propietario
/*

let objeto1 = new Propietario("Carlos", 3213322);

let objeto2 = new Propietario("Pedro");
let objeto3 = new Propietario("Oscar");

console.log(objeto1.getNombre());
*/