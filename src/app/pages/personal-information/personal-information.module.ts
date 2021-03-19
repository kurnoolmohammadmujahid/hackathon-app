import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInformationComponent } from './personal-information.component';
import { PersonalInformationRoutingModule } from './personal-information-routing.module';
import { ThingsYouShouldKnowModule } from '../things-you-should-know/things-you-should-know.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersonalInformationComponent],
  imports: [
    CommonModule,
    PersonalInformationRoutingModule,
    ThingsYouShouldKnowModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ButtonModule,
    FormsModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class PersonalInformationModule { }
