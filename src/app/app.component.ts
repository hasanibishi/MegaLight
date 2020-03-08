import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('al');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    const language: string = localStorage.getItem('language');
    this.translate.use(language);
  }

  changeLanguage(language: string) {
    localStorage.setItem('language', language);
    this.translate.use(language);
  }
}
