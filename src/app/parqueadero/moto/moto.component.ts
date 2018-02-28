import { Component, OnInit } from '@angular/core';
import { VigilanteService } from '../vigilante.service';
import { Moto } from '../Moto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css'],
  providers: [VigilanteService]
})
export class MotoComponent implements OnInit {

  moto:Moto;
  motoForm:FormGroup;

  constructor(private route:ActivatedRoute, private router:Router, 
              private vigilante:VigilanteService) { 

  }

  ngOnInit() {
    this.motoForm = new FormGroup({
      placa: new FormControl('', Validators.required),
      cilindraje: new FormControl('', Validators.required)    
    });
  }

  submitMoto(){

    if (this.motoForm.valid) { 
      let moto:Moto = new Moto(
      this.motoForm.controls['placa'].value,
      this.motoForm.controls['cilindraje'].value);
      this.vigilante.agregarMoto(moto);
    }

    this.motoForm.reset();
    this.redireccionInicio();
  }

  redireccionInicio(){
    this.router.navigate(['/inicio']);
  }
}
