import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginmedecinComponent } from './loginmedecin/loginmedecin.component';
import { LogoutmedecinComponent } from './logoutmedecin/logoutmedecin.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    LogoutComponent,
    LoginComponent,
    LogoutadminComponent,
    LoginadminComponent,
    LoginmedecinComponent,
    LogoutmedecinComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
