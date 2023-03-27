import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConnecterService } from 'src/app/_services/connecter.service';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    telephone: '',
    password:''
  }

  constructor(
    private connecterService:ConnecterService,
    private tokenService:TokenService
    ) {}
  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.form)
    this.connecterService.con(this.form).subscribe(
      data =>{
       console.log(data.token)
       this.tokenService.saveToken(data.token)
      },
      err => console.log(err)

    )
  }
}
