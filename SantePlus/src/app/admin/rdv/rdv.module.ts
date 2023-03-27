import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvRoutingModule } from './rdv-routing.module';
import { RdDeleteComponent } from './rd-delete/rd-delete.component';
import { RdAddComponent } from './rd-add/rd-add.component';
import { RdIndexComponent } from './rd-index/rd-index.component';
import { RdEditComponent } from './rd-edit/rd-edit.component';


@NgModule({
  declarations: [
    RdDeleteComponent,
    RdAddComponent,
    RdIndexComponent,
    RdEditComponent
  ],
  imports: [
    CommonModule,
    RdvRoutingModule
  ]
})
export class RdvModule { }
