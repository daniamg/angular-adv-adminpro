import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {
  public usuario: Usuario;
  public imgUrl = ''

  constructor(private usuarioService: UsuarioService){
    // this.imgUrl = usuarioService.usuario.imagenUrl;    
    this.usuario = usuarioService.usuario
  }

  logout(){
    this.usuarioService.logout();
  }

}
