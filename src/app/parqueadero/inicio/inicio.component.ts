import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redireccionAgregarVehiculo(){
    this.router.navigate(['/agregar']);
  }

  redireccionSacarVehiculo(){
    this.router.navigate(['/sacarVehiculo']);
  }

  redireccionListarVehiculos(){
    this.router.navigate(['/listarVehiculos']);
  }

}
