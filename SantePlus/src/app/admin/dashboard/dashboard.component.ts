import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private tokenService: TokenService){}

  ngOnInit(): void{

  }

  logout(): void{
    this.tokenService.clearToken()
  }

}
