import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string
  public tituloSubs$: Subscription

  constructor(private router: Router , private route:ActivatedRoute) {
    this.tituloSubs$ = this.getArgumentosRuta()
                  .subscribe(({ titulo }) => {
                    this.titulo = titulo
                    document.title = `AdminPro - ${titulo}`
                    // console.log(data)
                  })
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe()
  }

  getArgumentosRuta() {
   return this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        // filter((event: any) => event.snapshot.firstChild == null),
        // map((event: any) => event.snapshot.data == null)
        map(event => event as ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild == null),
        map((event: ActivationEnd) => event.snapshot.data)
        // filter()
      )
  }
}
