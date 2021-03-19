import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThingsYouShouldKnowComponent } from './things-you-should-know.component';

const routes: Routes = [
    {
        path: '',
        component: ThingsYouShouldKnowComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThingsYouShouldKnowRoutingModule { }
