import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RubricPage } from './rubric.page';

const routes: Routes = [
  {
    path: '',
    component: RubricPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})
export class RubricPageRoutingModule {}
