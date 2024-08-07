import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  // public links: NodeListOf<Element>;

  constructor(private settingService: SettingsService){}

  ngOnInit(): void {
    // this.links =  document.querySelectorAll('.selector')
    this.settingService.checkCurrentTheme()
    
  }

  changeTheme(theme: string) {
    // console.log(theme,'theme')
    // this.linkTheme = document.querySelector('#theme');
    // const url = `./assets/css/colors/${theme}.css`;
    // this.linkTheme?.setAttribute('href', url)
    // localStorage.setItem('theme', url);
    //  console.log(linkTheme,'linkTheme')
    // console.log(url,'url')
    this.settingService.changeTheme(theme)
    // this.settingService.checkCurrentTheme()
  }


  // checkCurrentTheme() {
  //   // console.log(links,'links')
  //   this.links.forEach(elem  => {
  //     elem.classList.remove('working');
  //       const btnTheme = elem.getAttribute('data-theme')
  //       const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
  //       const currentTheme = this.linkTheme?.getAttribute('href')

  //       if(btnThemeUrl == currentTheme){
  //         elem.classList.add('working')
  //       }
      
  //   })


  // }

}
