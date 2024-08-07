import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme =  document.querySelector('#theme');

  constructor() {
    let theme = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
     this.changeTheme1(theme)
         
   }

   changeTheme1(theme:string){
    this.linkTheme =  document.querySelector('#theme');
    this.linkTheme?.setAttribute('href',theme)

  }

  changeTheme(theme: string) {
    // console.log(theme,'theme')
    // this.linkTheme = document.querySelector('#theme');
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url)
    localStorage.setItem('theme', url);
    //  console.log(linkTheme,'linkTheme')
    // console.log(url,'url')
    this.checkCurrentTheme()
  }


  checkCurrentTheme() {
    // console.log(links,'links')
   const links = document.querySelectorAll('.selector')    // NodeListOf<Element>;
    links.forEach(elem  => {
      elem.classList.remove('working');
        const btnTheme = elem.getAttribute('data-theme')
        const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
        const currentTheme = this.linkTheme?.getAttribute('href')

        if(btnThemeUrl == currentTheme){
          elem.classList.add('working')
        }
      
    })


  }

}
