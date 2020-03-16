import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubricPageRoutingModule } from './rubric-routing.module';

import { RubricPage } from './rubric.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubricPageRoutingModule,
    
  ],
  declarations: [RubricPage,],
  // exports:[RubricPage]
})
export class RubricPageModule {}
