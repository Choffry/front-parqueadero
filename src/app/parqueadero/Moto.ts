export class Moto {

    placa:string;
    cilindraje:number;

    constructor(placa:string, cilindraje:number){
        this.placa = placa.toUpperCase();
        this.cilindraje = cilindraje;
    }
}