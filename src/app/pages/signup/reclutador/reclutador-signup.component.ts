import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReclutadorSignupRequest } from './reclutador-signup-interface';
import { ReclutadorSignupService } from './reclutador-signup.service';

@Component({
  selector: 'app-reclutador-signup',
  templateUrl: './reclutador-signup.component.html',
  styles: []
})
export class ReclutadorSignupComponent implements OnInit {

  public reclutadorsignupForm = this.fb.group({
    nombreUsuario: [''],
    ciudadUsuario: [''],
    emailUsuario: [''],
    numerodocumentoUsuario: [''],
    contraseñaUsuario: [''],
    nombrecontactanteUsuario: [''],
    tamañoempresaUsuario: [''],
    imagenUsuario: [null]
  }) 

  constructor(private fb: FormBuilder,
              private reclutadorsignupServie: ReclutadorSignupService) { }

  ngOnInit(): void {
  }

  signupSuccess = false;
  errorMessage = '';

  guardarReclutador(): void {

    var usuario: ReclutadorSignupRequest = {
      nombreUsuario: this.reclutadorsignupForm.controls['nombreUsuario'].value,
      ciudadUsuario: this.reclutadorsignupForm.controls['ciudadUsuario'].value,
      emailUsuario: this.reclutadorsignupForm.controls['emailUsuario'].value,
      numerodocumentoUsuario: this.reclutadorsignupForm.controls['numerodocumentoUsuario'].value,
      contraseñaUsuario: this.reclutadorsignupForm.controls['contraseñaUsuario'].value,
      nombrecontactanteUsuario: this.reclutadorsignupForm.controls['nombrecontactanteUsuario'].value,
      tamañoempresaUsuario: this.reclutadorsignupForm.controls['tamañoempresaUsuario'].value
    }

    var logoempresa: File;
    logoempresa = this.reclutadorsignupForm.controls['imagenUsuario'].value;

    this.reclutadorsignupServie.SignUpReclutador(usuario, logoempresa).subscribe(
      data => { 
        console.log(data);
        this.signupSuccess = true; 
      },

      err => {
        this.errorMessage = err.error.message;
        this.signupSuccess = false;
      }
    );
  }
}
