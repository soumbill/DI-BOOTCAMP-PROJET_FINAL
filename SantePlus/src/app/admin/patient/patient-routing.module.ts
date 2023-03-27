import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PIndexComponent } from './p-index/p-index.component';
import { PAddComponent } from './p-add/p-add.component';
import { PDeleteComponent } from './p-delete/p-delete.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: PIndexComponent},
  { path: 'add', component: PAddComponent},
  { path: 'modifier/:id', component: EditComponent},
  { path: 'delete/:idid', component: PDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
