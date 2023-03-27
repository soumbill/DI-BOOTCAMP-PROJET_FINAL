import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RdIndexComponent } from './rd-index/rd-index.component';

const routes: Routes = [
  {path:'', component:RdIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdvRoutingModule { }
