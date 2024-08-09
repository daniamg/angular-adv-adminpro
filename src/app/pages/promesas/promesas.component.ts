import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {

  ngOnInit(): void {
    this.getUsuarios().then(usuario => {
      console.log(usuario,'usuario')
    })
    // const promesa = new Promise( (resolve,reject) => {
    //   resolve('hola mundo')
    //   // console.log('HOLAAA')
    //   if (true) {
    //     resolve('hola mundo')
    //   }else {
    //     reject('mal')
    //   }
    // })
    // promesa.then((mensaje)=>{
    //   console.log(mensaje)
    // })
    // .catch(error => console.log('error en promes',error))
    // console.log('fin');
  }


  getUsuarios(){
    const promesa = new Promise( resolve => {
      fetch('https://reqres.in/api/users')
      .then(resp =>  resp.json())
      .then(body => resolve(body.data))
        // resp.json()
    })

    return promesa;
    
  }

}
