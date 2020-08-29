import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {PropietarioService  } from '../../services/propietario.service';

@Component({
  selector: 'app-register-propietario',
  templateUrl: './register-propietario.component.html',
  styleUrls: ['./register-propietario.component.css']
})
export class RegisterPropietarioComponent implements OnInit {

  capForm: FormGroup;

  constructor(
      
    private formBuilder: FormBuilder,
    private capService: PropietarioService,
    private routeParams: ActivatedRoute, //Lo vamos a utilizar para obtener los parametros de la url.
    private route: Router //Para generar redirecciones

  ) {
    this.validateForm();
   }

  ngOnInit(): void {
  }

   
  validateForm() {
    this.capForm = this.formBuilder.group({
      cedula: ['', Validators.required],
      primerNombre: ['', Validators.required],
      SegundoNombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      
    })
  }


  registerCap() {
    if (this.capForm.valid) {

      const cap = this.capForm.value;
      
      const formData = new FormData();
      formData.append('cedula', cap.cedula);
      formData.append('primerNombre', cap.primerNombre);
      formData.append('SegundoNombre', cap.SegundoNombre);
      formData.append('apellidos', cap.apellidos);
      formData.append('direccion', cap.direccion);
      formData.append('telefono', cap.telefono);
      formData.append('ciudad', cap.ciudad);

      
       
        this.capService.createCap(cap).subscribe(
          (createdSong) => {
            alert("propietario creado");
            this.route.navigate(['/registrarPropietario']);//Redireccionar a otro componente.
          },
          (error) => {

            console.error("Error al crear la canción", error)
          }
        );
       
    } else {
      alert("Error, debes llenar todos los campos");
    }

  }



}
