import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';
import { LoginForm } from '../../interfaces/login-form.interface';

declare const google: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('googleBtn') googleBtn: ElementRef;

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || "" , [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [false]
  });

  // email: ['test100@gmail.com', [Validators.required, Validators.email]],
  // password: ['12345', [Validators.required]],
  // remember: [false]
  // const datosForm:LoginForm = this.loginForm.value as LoginForm;

  constructor(private router: Router, private fb: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.googleInit()
 
  }


  googleInit(){
   google.accounts.id.initialize({
      client_id: '658127058094-u57da9erkvqjg75ggg6to5sebi0tovn6.apps.googleusercontent.com',
      callback: (response:any) => this.handleCredentialResponse(response)
    });
    google.accounts.id.renderButton(
      // document.getElementById("buttonDiv"),
      this.googleBtn.nativeElement,
      { theme: "outline", size: "large" }  // customization attributes
    );
  }


  handleCredentialResponse(response:any){
    console.log("Encoded JWT ID token: " + response.credential);
    this.usuarioService.loginGoogle(response.credential)
      .subscribe(resp => {
          // console.log({login:resp})
          this.router.navigateByUrl('/')
      })
  }

  login() {
    // this.router.navigateByUrl('/')
    console.log(this.loginForm.value)
    this.usuarioService.login(this.loginForm.value as LoginForm)
      .subscribe(resp => {
        console.log(resp)
        if(this.loginForm.get('remember')?.value){
          localStorage.setItem('email', this.loginForm.get('email')?.value ?? "");
        }else{
          localStorage.removeItem('email')
        }
        this.router.navigateByUrl('/')
      }, (err) => {
        Swal.fire('ERROR', err.error.msg, 'error')
      })
  }
}
