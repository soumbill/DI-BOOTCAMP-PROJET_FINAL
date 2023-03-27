import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HopitalRoutingModule } from './hopital-routing.module';
import { HoAddComponent } from './ho-add/ho-add.component';
import { HoDeleteComponent } from './ho-delete/ho-delete.component';
import { HoIndexComponent } from './ho-index/ho-index.component';
import { HoEditComponent } from './ho-edit/ho-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HoAddComponent,
    HoDeleteComponent,
    HoIndexComponent,
    HoEditComponent
  ],
  imports: [
    CommonModule,
    HopitalRoutingModule,
    FormsModule
  ]
})
export class HopitalModule { }
