import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialiteRoutingModule } from './specialite-routing.module';
import { SIndexComponent } from './s-index/s-index.component';
import { SAddComponent } from './s-add/s-add.component';
import { SDeleteComponent } from './s-delete/s-delete.component';
import { SEditComponent } from './s-edit/s-edit.component';


@NgModule({
  declarations: [
    SIndexComponent,
    SAddComponent,
    SDeleteComponent,
    SEditComponent
  ],
  imports: [
    CommonModule,
    SpecialiteRoutingModule
  ]
})
export class SpecialiteModule { }
