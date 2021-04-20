import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostulanteSigninComponent } from './postulante/postulante-signin.component';
import { ReclutadorSigninComponent } from './reclutador/reclutador-signin.component';

@NgModule({
  declarations: [
    PostulanteSigninComponent,
    ReclutadorSigninComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SigninModule { }
