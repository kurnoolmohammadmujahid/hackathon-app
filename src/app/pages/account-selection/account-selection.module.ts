import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountSelectionComponent } from './account-selection.component';
import { AccountSelectionRoutingModule } from './account-selection-routing.module';
import { ThingsYouShouldKnowModule } from '../things-you-should-know/things-you-should-know.module';
import { ButtonModule } from 'primeng/button';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ServerCallService } from '../../services/server-call.service';
import { EventHandlingService } from '../../services/event-handling.service';

@NgModule({
  declarations: [AccountSelectionComponent],
  imports: [
    CommonModule,
    AccountSelectionRoutingModule,
    ThingsYouShouldKnowModule,
    ButtonModule,
    MatButtonModule,
    MatInputModule,
    ListboxModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [ServerCallService, EventHandlingService]
})
export class AccountSelectionModule { }
