import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoIndexComponent } from './ho-index/ho-index.component';
import { HoEditComponent } from './ho-edit/ho-edit.component';
import { HoAddComponent } from './ho-add/ho-add.component';
import { HoDeleteComponent } from './ho-delete/ho-delete.component';


const routes: Routes = [
  { path: '', component: HoIndexComponent},
  { path: 'ajouter', component: HoAddComponent},
  { path: 'modifier/:id', component: HoEditComponent},
  { path: 'delete/:id', component: HoDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HopitalRoutingModule { }
