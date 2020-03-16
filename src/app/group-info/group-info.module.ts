import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupInfoPageRoutingModule } from './group-info-routing.module';

import { GroupInfoPage } from './group-info.page';
import { RubricPage } from '../home/rubric/rubric.page';
import { RubricPageModule } from '../home/rubric/rubric.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupInfoPageRoutingModule,
    RubricPageModule
  ],
  declarations: [GroupInfoPage]
})
export class GroupInfoPageModule {}
