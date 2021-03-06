import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-register-vehiculo',
  templateUrl: './register-vehiculo.component.html',
  styleUrls: ['./register-vehiculo.component.css']
})
export class RegisterVehiculoComponent implements OnInit {

  capForm: FormGroup; 

  constructor(

    private formBuilder: FormBuilder,
    private capService: VehiculoService,
    private routeParams: ActivatedRoute, //Lo vamos a utilizar para obtener los parametros de la url.
    private route: Router //Para generar redirecciones

  ) {
    this.validateForm();
   }

  ngOnInit(): void {
  }
    
  validateForm() {
    this.capForm = this.formBuilder.group({
      placa: ['', Validators.required],
      color: ['', Validators.required],
      marca: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],
      idConductor: ['', Validators.required],
      idPropietario: ['', Validators.required],
          
    })
  }

  registerCap() {
    if (this.capForm.valid) {

      const cap = this.capForm.value;
      
      const formData = new FormData();
      formData.append('placa', cap.placa);
      formData.append('color', cap.color);
      formData.append('marca', cap.marca);
      formData.append('tipoVehiculo', cap.tipoVehiculo);
      formData.append('idConductor', cap.idConductor);
      formData.append('idPropietario', cap.idPropietario);
      
       
         this.capService.createCap(cap).subscribe(
          (createdSong) => {
            alert("vehiculo creado");
            this.route.navigate(['/registrarvehiculo']);//Redireccionar a otro componente.
          },
          (error) => {
            console.error("Error al crear el formulario", error)
          }
        );
        } else {
          alert("Error, debes llenar todos los campos");
       }

  }
 
    
}
