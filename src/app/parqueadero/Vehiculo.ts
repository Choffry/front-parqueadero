export class Vehiculo {

    placa:string;
    tipo:string;
    fechaIngreso:Date;

    constructor(placa:string, tipo:string, fechaIngreso:Date){
        this.placa = placa;
        this.tipo = tipo;
        this.fechaIngreso = fechaIngreso;
    }
}