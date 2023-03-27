import { Component } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { ICredential } from 'src/app/interfaces/credential';
import { TokenService } from '../../_services/token.service';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent {

  form: ICredential = {
    email: '',
    password:''
  }

  constructor(
    private authService:AuthService,
    private tokenService:TokenService
    ){}

  ngOnInit(): void{
  }

  onSubmit(): void{
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data =>{
       console.log(data.token)
       this.tokenService.saveToken(data.token)
      },
      err => console.log(err)

    )
  }

}
