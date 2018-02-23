export class Factura {

    placa:string;
    cilindraje:number;
    horaIngreso:Date;
    horaSalida:Date;
    pagoTotal:number;

    constructor(placa:string, cilindraje:number, horaIngreso:Date, horaSalida:Date, pagoTotal:number){
        this.placa = placa;
        this.cilindraje = cilindraje;
        this.horaIngreso = horaIngreso;
        this.horaSalida = horaSalida;
        this.pagoTotal = pagoTotal;
    }
}