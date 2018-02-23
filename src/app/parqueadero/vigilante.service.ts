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

  constructor(private http:Http ) {    
  }

  listarVehiculos():Observable<Vehiculo[]>{

    return this.http.get(this.listarVehiculosURL)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  agregarCarro(carro:Carro):Observable<Carro>{
    return this.http.post(this.addCarroURL, carro)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  agregarMoto(moto:Moto):Observable<Moto>{
    return this.http.post(this.addMotoURL, moto)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  facturar(carro:Carro):Observable<Factura[]>{
    return this.http.post(this.facturaURL, carro)
                    .map((res:Response) => res.json()
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error')));
  }
}
