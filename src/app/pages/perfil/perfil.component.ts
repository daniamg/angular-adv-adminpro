import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { FileUploadService } from '../../services/file-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: ``
})
export class PerfilComponent implements OnInit { 
  public perfilForm : FormGroup;
  public usuario: Usuario;
  public imagenSubir: File;
  public imgTemp:any  = '';

    constructor(private fb: FormBuilder, private usuarioService:UsuarioService,private fileUploadService: FileUploadService ){
      this.usuario = usuarioService.usuario;
    }

    ngOnInit(): void {
      this.perfilForm = this.fb.group({
        nombre:[this.usuario.nombre,Validators.required],
        email:[this.usuario.email,[Validators.required, Validators.email]],
      })
      
    }


    actualizarPerfil(){
      console.log(this.perfilForm.value);
      this.usuarioService.actualizarPerfil(this.perfilForm.value)
        .subscribe(resp => {          
          const {nombre,email} = this.perfilForm.value
          this.usuario.nombre = nombre;
          this.usuario.email = email;
          Swal.fire('Guardado','Cambios Gardados','success')
        }, (err) => {
          
          Swal.fire('Error',err.error.msg,'error')
          console.log(err)
        })

    }


    cambiarImagen(event:any){
      let file =  event.target.files[0]
      this.imagenSubir = file 
      // event.target.files[0]

      if(!file){        
        this.imgTemp = null;
        return
      }
      const reader = new FileReader();
      // const url64 =
       reader.readAsDataURL(file);

      reader.onloadend = () => {
        this.imgTemp = reader.result
        // console.log(reader.result);
      }

    }

    subirImagen(){
      this.fileUploadService
      .actualizarFoto(this.imagenSubir,'usuarios',this.usuario.uid || '')
      .then(img => { 
        this.usuario.img = img
      
        Swal.fire('Guardado','Imagen de Usuario Actualizada','success')
      }).catch(err => {
        Swal.fire('Error','No se pudo subir la imagen','error')
      })
    }

}
