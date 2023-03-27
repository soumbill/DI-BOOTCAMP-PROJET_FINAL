import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MIndexComponent } from './m-index/m-index.component';
import { MEditComponent } from './m-edit/m-edit.component';
import { MAddComponent } from './m-add/m-add.component';
import { MDeleteComponent } from './m-delete/m-delete.component';

const routes: Routes = [
  { path: '', component: MIndexComponent},
  { path: 'edit/id', component: MEditComponent},
  { path: 'add', component: MAddComponent},
  { path: 'delete/id', component: MDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedecinRoutingModule { }
