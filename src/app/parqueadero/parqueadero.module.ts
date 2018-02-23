import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculosComponent } from './listar-vehiculos/listar-vehiculos.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgregarComponent } from './agregar/agregar.component';
import { CarroComponent } from './carro/carro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotoComponent } from './moto/moto.component';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';
import { ReyesmaricaComponent } from './reyesmarica/reyesmarica.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ListarVehiculosComponent, InicioComponent, AgregarComponent, CarroComponent, MotoComponent, SacarVehiculoComponent, ReyesmaricaComponent]
})
export class ParqueaderoModule { }
