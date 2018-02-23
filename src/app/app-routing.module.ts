import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarVehiculosComponent } from './parqueadero/listar-vehiculos/listar-vehiculos.component';
import { InicioComponent } from './parqueadero/inicio/inicio.component';
import { AgregarComponent } from './parqueadero/agregar/agregar.component';
import { CarroComponent } from './parqueadero/carro/carro.component';
import { MotoComponent } from './parqueadero/moto/moto.component';
import { SacarVehiculoComponent } from './parqueadero/sacar-vehiculo/sacar-vehiculo.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'listarVehiculos', component: ListarVehiculosComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'agregar/carro', component: CarroComponent},
  {path: 'agregar/moto', component: MotoComponent},
  {path: 'sacarVehiculo', component: SacarVehiculoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
