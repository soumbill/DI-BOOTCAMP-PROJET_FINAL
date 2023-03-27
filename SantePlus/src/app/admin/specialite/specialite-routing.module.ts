import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SIndexComponent } from './s-index/s-index.component';
import { SEditComponent } from './s-edit/s-edit.component';
import { SAddComponent } from './s-add/s-add.component';
import { SDeleteComponent } from './s-delete/s-delete.component';

const routes: Routes = [
  { path: '', component: SIndexComponent},
  { path: 'edit/id', component: SEditComponent},
  { path: 'add', component: SAddComponent},
  { path: 'delete/id', component: SDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialiteRoutingModule { }
