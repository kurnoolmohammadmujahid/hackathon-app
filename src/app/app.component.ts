import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bmoDemo';
  onActivate(event: Event) {
    window.scroll(0, 0);
    // or document.body.scrollTop = 0;
    // or document.querySelector('body').scrollTo(0,0)
  }

  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
  }
}
