import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redireccionAgregarCarro(){
    this.router.navigate(['agregar/carro']);
  }

  redireccionAgregarMoto(){
    this.router.navigate(['agregar/moto']);
  }

}
