import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParishionerListComponent } from './parishioner-list/parishioner-list.component';

@NgModule({
  declarations: [
    ParishionerListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParishionerListComponent
  ]
})
export class FeatModule { }
