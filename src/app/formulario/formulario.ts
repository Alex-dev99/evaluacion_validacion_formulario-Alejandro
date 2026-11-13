import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario',
  styleUrl: './formulario.css',
  templateUrl: './formulario.html',
})
export class Formulario {

  formulario = new FormGroup({
    nombre : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    apellidos : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+( [a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    telefono : new FormControl('',[Validators.required, Validators.pattern( /^(\+34 ?)?[6-9]\d{8}$/)]),
    email : new FormControl('', [Validators.required, Validators.email]),    
    mascota : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([ -][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/)]),
    especie : new FormControl('', [Validators.required]),
    sexo : new FormControl('', [Validators.required]),
    raza : new FormControl('', Validators.maxLength(40)),
    edad : new FormControl('', [Validators.required, Validators.minLength(0), Validators.maxLength(30)]),
    peso : new FormControl('', [Validators.required, Validators.minLength(0.1), Validators.maxLength(90)]),
    microchip : new FormControl('', [Validators.required, Validators.pattern(/^\d{15}$/)], ),
    contrasena : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S+$/)]),
    motivo : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(300)]),
    privacidad : new FormControl('', Validators.required),

  });
  saveForm() {

}
  onSubmit() {
  if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
  }
  this.saveForm();
}

}
