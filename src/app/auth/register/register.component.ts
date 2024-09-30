import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})

export class RegisterComponent {


  constructor(private fb:FormBuilder, private usuarioService: UsuarioService, private router: Router){}
  public formSubmitted = false;


  public registerForm = this.fb.group({
      nombre:['Dania', [Validators.required]],
      email:['test100@gmail.com', [Validators.required,Validators.email]],
      password:['12345', [Validators.required]],
      password2:['12345', [Validators.required]],
      terminos:[true, [Validators.required]],
  },{ 
    validators: this.passwordsIguales('password','password2')

  });


  crearUsuario(){
    this.formSubmitted = true
    console.log(this.registerForm.value, 'regiter')

    if(this.registerForm.invalid){
      return;
    }

    //realizar el posteo 
      this.usuarioService.crearUsuario(this.registerForm.value).subscribe((resp:any) =>  {
        console.log('usuario creado')
        console.log(resp)
        this.router.navigateByUrl('/')

      }, (err:any) =>{

        Swal.fire('ERROR',err.error.msg, 'error')
        
      } )

      // console.warn(err.error.msg)
  }

  campoNoValido(campo: string): boolean {
    // return true;


    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    }else{
      return false;
    }
  }
  contrasenasNoValidas(){
    const pass1 = this.registerForm.get('password')?.value
    const pass2 = this.registerForm.get('password2')?.value

    if ((pass1 !== pass2) && this.formSubmitted ) {
      return true;      
    }else {
      return false;
    }
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmitted
  }

  passwordsIguales(pass1Name:string, pass2Name:string){
    return (formGroup: FormGroup) => {
          const pass1Controll = formGroup.get(pass1Name)          
          const pass2Controll = formGroup.get(pass2Name)

          if(pass1Controll?.value === pass2Controll?.value){
            pass2Controll?.setErrors(null)
          }else {
            pass2Controll?.setErrors({noEsIgual:true})
          }


    }
  }

}
