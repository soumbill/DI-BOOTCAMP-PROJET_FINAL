import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { LoginmedecinComponent } from './loginmedecin/loginmedecin.component';
import { LogoutmedecinComponent } from './logoutmedecin/logoutmedecin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'logout', component: LogoutComponent},
  { path: 'login', component: LoginadminComponent},
  { path: 'logoutadmin', component: LogoutadminComponent},
  { path: 'loginmedecin', component: LoginmedecinComponent},
  { path: 'logoutmedecin', component: LogoutmedecinComponent},
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
