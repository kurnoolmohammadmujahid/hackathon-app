import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalReviewComponent } from './final-review.component';
import { FinalReviewRoutingModule } from './final-review-routing.module';
import { ThingsYouShouldKnowModule } from '../things-you-should-know/things-you-should-know.module';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FinalReviewComponent],
  imports: [
    CommonModule,
    FinalReviewRoutingModule,
    ThingsYouShouldKnowModule,
    ButtonModule,
    HttpClientModule
  ]
})
export class FinalReviewModule { }
