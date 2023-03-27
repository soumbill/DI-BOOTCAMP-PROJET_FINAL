import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinRoutingModule } from './medecin-routing.module';
import { MDeleteComponent } from './m-delete/m-delete.component';
import { MAddComponent } from './m-add/m-add.component';
import { MEditComponent } from './m-edit/m-edit.component';
import { MIndexComponent } from './m-index/m-index.component';


@NgModule({
  declarations: [
    MDeleteComponent,
    MAddComponent,
    MEditComponent,
    MIndexComponent
  ],
  imports: [
    CommonModule,
    MedecinRoutingModule
  ]
})
export class MedecinModule { }
