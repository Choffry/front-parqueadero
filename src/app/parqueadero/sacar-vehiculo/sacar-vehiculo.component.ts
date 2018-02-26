import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Carro } from '../Carro';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VigilanteService } from '../vigilante.service';
import { Factura } from '../Factura';

@Component({
  selector: 'app-sacar-vehiculo',
  templateUrl: './sacar-vehiculo.component.html',
  styleUrls: ['./sacar-vehiculo.component.css'],
  providers: [VigilanteService],
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        position: 'relative',
        left: '33.3333%',
      })), 
      state('final', style({
        position: 'relative',
        left: '16.5%',
      })),
      transition('inicial => final', animate(1000))
    ]),

    trigger('animacionFactura', [
      state('inicial', style({
        position: 'relative',
        left: '33.3333%',
        opacity: 0
      })), 
      state('final', style({
        position: 'relative',
        left: '16.5%',
        opacity: 1
      })),
      transition('inicial => final', animate(1000))
    ])
  ]
})

export class SacarVehiculoComponent implements OnInit {

  factura:Factura;
  facturaForm:FormGroup;

  state = 'inicial';
  estado = false;

  animar(){
    this.state = (this.state == 'final') ? 'inicial' : 'final';
  }

  constructor(private route:ActivatedRoute, private router:Router,
              private vigilante:VigilanteService) {
  }

  ngOnInit() {
    this.facturaForm = new FormGroup({
      placa: new FormControl('', Validators.required)
    });
  }

  getFactura(){

    if(this.facturaForm.valid){
      let carro:Carro = new Carro(
        this.facturaForm.controls['placa'].value
      );

      this.vigilante.facturar(carro).subscribe(
        factura => {
          this.factura = factura;        
          console.log(factura);
        },
        err => {
          console.log(err);
        }
      );
    }
    this.facturaForm.reset();
  }

  redireccionInicio(){
    this.router.navigate(['/inicio']);
  }

}
