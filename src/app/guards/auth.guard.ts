import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { inject, Injectable } from '@angular/core';

import { tap } from 'rxjs';


export const authGuard: CanActivateFn = (route, state) => {
  const usuarioService: UsuarioService = inject(UsuarioService);
  const router: Router = inject(Router);
  // constructor()
    
  return  usuarioService.validarToken()
          .pipe(
            tap( isAuth => {
              if (!isAuth ) {
                router.navigateByUrl('/login')
                
              }

            })
          )
  
};


// usuarioService.validarToken().subscribe(resp => {
//   console.log(resp)
//   console.log('guards')
// })
// @Injectable({
//   providedIn:'root'
// })

// export class AuthGuard implements CanActivate {
//   constructor(private usuarioService: UsuarioService){}
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
//   }

// }

