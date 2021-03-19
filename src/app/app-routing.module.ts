import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidSessionGuard } from './guard/valid-session.guard';

const routes: Routes = [
  {
    path: 'things-you-should-know',
    loadChildren: () => import('./pages/things-you-should-know/things-you-should-know.module').then(mod => mod.ThingsYouShouldKnowModule)
  },
  {
    path: 'account-selection',
    loadChildren: () => import('./pages/account-selection/account-selection.module').then(mod => mod.AccountSelectionModule),
    canActivate: [ValidSessionGuard]
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./pages/personal-information/personal-information.module').then(mod => mod.PersonalInformationModule),
    canActivate: [ValidSessionGuard]
  },
  {
    path: 'final-review',
    loadChildren: () => import('./pages/final-review/final-review.module').then(mod => mod.FinalReviewModule),
    canActivate: [ValidSessionGuard]
  },
  {
    path: '',
    redirectTo: '/things-you-should-know',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/things-you-should-know'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
