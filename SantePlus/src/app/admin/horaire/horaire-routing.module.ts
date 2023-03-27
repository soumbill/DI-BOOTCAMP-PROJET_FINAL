import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HIndexComponent } from './h-index/h-index.component';
import { HEditComponent } from './h-edit/h-edit.component';
import { HAddComponent } from './h-add/h-add.component';
import { HDeleteComponent } from './h-delete/h-delete.component';

const routes: Routes = [
  { path: '', component: HIndexComponent},
  { path: 'edit/id', component: HEditComponent},
  { path: 'add', component: HAddComponent},
  { path: 'delete/id', component: HDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoraireRoutingModule { }
