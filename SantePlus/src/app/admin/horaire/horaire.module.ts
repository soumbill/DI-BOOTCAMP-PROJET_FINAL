import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraireRoutingModule } from './horaire-routing.module';
import { HIndexComponent } from './h-index/h-index.component';
import { HAddComponent } from './h-add/h-add.component';
import { HEditComponent } from './h-edit/h-edit.component';
import { HDeleteComponent } from './h-delete/h-delete.component';


@NgModule({
  declarations: [
    HIndexComponent,
    HAddComponent,
    HEditComponent,
    HDeleteComponent
  ],
  imports: [
    CommonModule,
    HoraireRoutingModule
  ]
})
export class HoraireModule { }
