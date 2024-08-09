import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval} from 'rxjs';
import { retry,take, map, filter } from 'rxjs/operators'
// impor {retry}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})

export class RxjsComponent implements OnDestroy {
  intervalSubs : Subscription
  constructor(){  
    // this.retornaObservable().pipe(
    // //transformar la informacion que fluye a traves del obvs
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('sub',valor),
    //   error => console.warn('Error',error),
    //   () => console.info('Obs terminado')
    // );
    this.intervalSubs = this.retornaIntervalo().subscribe(console.log)

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
    // throw new Error('Method not implemented.');
  }

  retornaIntervalo(): Observable<number> {
    return interval(100)
    .pipe(    
      // take(10),
      map(valor => valor + 1), //0 => 1
      filter(valor => (valor % 2 === 0 ) ? true : false ), //emitir valor de maera condicional
  )
    // return intervalo$;

  }

  retornaObservable(): Observable<number>{
    let i = -1;
    const obs$ = new Observable<number>( observer => {
      // let i = -1;
       const intervalo = setInterval(() => {
          i++;
          observer.next(i)
          if(i === 4){
            clearInterval(intervalo)
            observer.complete();
          }
          if (i === 2) {
            // i = 0
            console.log('i =2 ...error')
            observer.error('i llego al valor de 2')            
          }
          // console.log('tick')
        },1000)
    });
    return obs$;  
  }

}
