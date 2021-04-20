import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReclutadorSignupRequest } from './reclutador-signup-interface';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/reclutador/signup';

@Injectable({
  providedIn: 'root'
})

export class ReclutadorSignupService {

  constructor(private http: HttpClient) { }

  SignUpReclutador(usuario: ReclutadorSignupRequest, logoempresa: File): Observable<any> {

    const reclutadordata = new Blob([JSON.stringify(usuario)], {type: 'application/json'})

    var reclutador: FormData = new FormData();

    reclutador.append('usuario', reclutadordata);
    reclutador.append('logo', logoempresa);
    
    return this.http.post(
      AUTH_API, 
      reclutador);
  }
}
