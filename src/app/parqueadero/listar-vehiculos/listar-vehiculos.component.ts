import { Component, OnInit } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { Vehiculo } from '../vehiculo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css'],
  providers: [VigilanteService]
})

export class ListarVehiculosComponent implements OnInit {

  private vehiculos:Vehiculo[];

  constructor(private vigilanteService:VigilanteService, private router:Router) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(){
    this.vigilanteService.listarVehiculos().subscribe(
      vehiculos => {
        this.vehiculos = vehiculos;
        console.log(vehiculos);
      },
      err => {
        console.log(err);
      }
    );
  }

  redireccionInicio(){
    this.router.navigate(['/inicio']);
  }
}
