import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function  customInitFunctions() : any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {


  // public linkTheme =  document.querySelector('#theme');

  constructor(private settingServices: SettingsService){}

  ngOnInit() {

    customInitFunctions();
    // let theme = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';8
    // console.log(theme, 'local')
    // //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // //Add 'implements OnInit' to the class.
    // // /assets/css/colors/purple-dark.css
    //  this.changeTheme(theme)
         
    
  }


 
  // changeTheme(theme:string){
  //   // console.log(theme,'theme')

   
  //   this.linkTheme =  document.querySelector('#theme');
  //   // const url  = `./assets/css/colors/${theme}.css`;
  //   this.linkTheme?.setAttribute('href',theme)
  //   // localStorage.setItem('theme',url);
  // //  console.log(linkTheme,'linkTheme')
  //   // console.log(url,'url')
  // }

}
