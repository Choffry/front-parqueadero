import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Vehiculo } from './vehiculo';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Carro } from './Carro';
import { Moto } from './Moto';
import { Factura } from './Factura';

@Injectable()
export class VigilanteService {

  private addCarroURL = 'http://localhost:8090/parqueadero/addCarro';
  private addMotoURL = 'http://localhost:8090/parqueadero/addMoto';
  private listarVehiculosURL = 'http://localhost:8090/parqueadero/listVehiculo';
  private facturaURL = 'http://localhost:8090/parqueadero/outVehiculo';

  PLACA_SIN_ACCESSO:string = "Accesso denegado por placa";
  PARQUEADERO_CARRO_LLENO:string = "Cupos de Carro lleno";
  PARQUEADERO_MOTO_LLENO:string = "Cupos de Moto lleno";
  VEHICULO_YA_INGRESADO:string = "El vehiculo ya se encuentra adentro";
  VEHICULO_NO_EXISTE:string = "El vehiculo no existe";

  checkError:any;

  constructor(private http:Http ) {    
  }

  listarVehiculos():Observable<Vehiculo[]>{

    return this.http.get(this.listarVehiculosURL)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  agregarCarro(carro:Carro){
    return this.http.post(this.addCarroURL, carro).subscribe(response => {

    }, (error:Response) => {
      this.checkError = error.json();
      this.validacionError();
    });
  }

  agregarMoto(moto:Moto){
    return this.http.post(this.addMotoURL, moto).subscribe(response => {

    }, (error:Response) => {
      this.checkError = error.json();
      this.validacionError();
    });
                    
  }

  facturar(carro:Carro){
    return this.http.put(this.facturaURL, carro)
                    .map((res:Response) => res.json());
  }

  validacionError(){
    switch (this.checkError.message) {
      case this.PLACA_SIN_ACCESSO:
        alert(this.PLACA_SIN_ACCESSO);
        break;

      case this.PARQUEADERO_CARRO_LLENO:
        alert(this.PARQUEADERO_CARRO_LLENO);
        break;

      case this.PARQUEADERO_MOTO_LLENO:
        alert(this.PARQUEADERO_MOTO_LLENO);
        break;

      case this.VEHICULO_YA_INGRESADO:
        alert(this.VEHICULO_YA_INGRESADO);
        break;
  
      default:
        break;
    }
  }

  /*this.http.post('http://localhost:8183/api/vehicules', this.letter, { headers: headers })
     .subscribe(response => {


         this.reload(this.http);
       console.log(response.toString())
     },(error:Response)=>{

     //  this.checkdia=JSON.parse();
       this.checkdia=  error.json()
         debugger
       if(this.checkdia.message==='no puede ingresar por dia invalido'){
         this.showError();
         alert('No puede Ingresar placa no permitida este dia')
       }*/
}
