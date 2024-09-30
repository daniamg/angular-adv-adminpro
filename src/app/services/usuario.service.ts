import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

declare const google:any;

const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private router:Router, private ngZone: NgZone) { }

  logout(){
    localStorage.removeItem('token')
    // this.router.navigateByUrl('/login') 
    // daniag.seguridad@gmail.com
    google.accounts.id.revoke('daniag.seguridad@gmail.com', () => {
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/login')
      })
      this.router.navigateByUrl('/login')
    })
  }
  
  validarToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || ''
     return this.http.get(`${base_url}/login/renew`,{
        headers:{
          'x-token':token
        }
      }).pipe(
        tap((resp:any) => {
          localStorage.setItem('token',resp.token)
        }),
        map(resp => true),
        catchError(error => of(false))
      )
  }

  crearUsuario(formData: RegisterForm): any {
  //  console.log('creando usuario');

  //tap disparar un efecto secundario
   return this.http.post(`${base_url}/usuarios`,formData)
                  .pipe(
                    tap((resp:any) => {
                      // console.log(resp)
                      localStorage.setItem('token',resp.token)
                    })
                  )
  }


  login(formData: LoginForm) {
    //  console.log('creando usuario');
     return this.http.post(`${base_url}/login`,formData)
                    .pipe(
                      tap((resp:any) => {
                        // console.log(resp)
                        localStorage.setItem('token',resp.token)
                      })
                    )
      
    }

    loginGoogle(token: string){
      return this.http.post(`${base_url}/login/google`,{token})
      .pipe(
        tap((resp:any) => {
          console.log(resp)
          localStorage.setItem('token', resp.token)
        })
      )
    }
}
