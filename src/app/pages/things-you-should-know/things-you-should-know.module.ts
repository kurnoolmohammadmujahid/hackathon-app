import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThingsYouShouldKnowComponent } from './things-you-should-know.component';
import { ThingsYouShouldKnowRoutingModule } from './things-you-should-know-routing.module';
import { SideNavComponent } from '../../shared/side-nav/side-nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from '../../shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServerCallService } from '../../services/server-call.service';
import { EventHandlingService } from '../../services/event-handling.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function customHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../../../assets/i18n/", ".json");
}


@NgModule({
  declarations: [
    ThingsYouShouldKnowComponent,
    SideNavComponent,
    HeaderComponent
  ],
  exports: [
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ThingsYouShouldKnowRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customHttpLoader,
        deps: [HttpClient],
      },
      isolate: false
    })
  ],
  providers: [ServerCallService, EventHandlingService]
})
export class ThingsYouShouldKnowModule { }
