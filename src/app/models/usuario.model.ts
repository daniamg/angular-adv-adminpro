import { environment } from "../../environments/environment";

const base_url = environment.base_url;
export class Usuario {
    constructor(
            public nombre: string,
            public email: string ,
            public password?: string,
            public img?: string,
            public google?: boolean,
            public role?: string,          
            public uid?: string 
    ){}

    // imprimirUsuario(){
    //     console.log(this.nombre)
    // }

    get imagenUrl(){
        // localhost:3005/api/uploads/usuarios/2825fb06-4919-4882-95fa-5de6c6c3d0fe.png

        if(this.img?.includes('https')){
            return this.img;
        }

        if(this.img){
            return `${base_url}/uploads/usuarios/${this.img}`
        }else{
            return `${base_url}/uploads/usuarios/no-img.jpg`
        }

    }
}