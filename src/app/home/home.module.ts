import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { GroupInfoPage } from '../group-info/group-info.page';
import { RubricPageModule } from './rubric/rubric.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path:':id',
        component: GroupInfoPage
      }
    ])
  ],
  declarations: [HomePage,GroupInfoPage]
})
export class HomePageModule {}
