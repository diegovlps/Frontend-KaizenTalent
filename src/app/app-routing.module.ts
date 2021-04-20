import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostulanteSigninComponent } from './pages/signin/postulante/postulante-signin.component';
import { ReclutadorSigninComponent } from './pages/signin/reclutador/reclutador-signin.component';
import { PostulanteSignupComponent } from './pages/signup/postulante/postulante-signup.component';
import { ReclutadorSignupComponent } from './pages/signup/reclutador/reclutador-signup.component';

const routes: Routes = [
  { path: 'signin/postulante', component: PostulanteSigninComponent},
  { path: 'signin/reclutador', component: ReclutadorSigninComponent},
  { path: 'signup/postulante', component: PostulanteSignupComponent},
  { path: 'signup/reclutador', component: ReclutadorSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

