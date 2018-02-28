import { Component, OnInit, OnDestroy } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { Carro } from '../Carro';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css'],
  providers: [VigilanteService]
})
export class CarroComponent implements OnInit {

  carro:Carro;
  carroForm:FormGroup;

  constructor(private route:ActivatedRoute, private router:Router, 
              private vigilante:VigilanteService) {

  }

  ngOnInit() {
    this.carroForm = new FormGroup({
      placa: new FormControl('', Validators.required) 
    });
  }

  submitCarro() {
    if (this.carroForm.valid) { 
      let carro:Carro = new Carro(
      this.carroForm.controls['placa'].value);
      this.vigilante.agregarCarro(carro);
    }

    this.carroForm.reset();
    this.redireccionInicio();
  }

  redireccionInicio(){
    this.router.navigate(['/inicio']);
  }

}
