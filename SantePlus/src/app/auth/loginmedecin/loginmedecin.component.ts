import { Component } from '@angular/core';

@Component({
  selector: 'app-loginmedecin',
  templateUrl: './loginmedecin.component.html',
  styleUrls: ['./loginmedecin.component.css']
})
export class LoginmedecinComponent {

  form: any = {
    nom: null,
    password:null
  }

  constructor(){}

  ngOnInit(): void{
  }

  onSubmit(): void{
    console.log(this.form)
  }

}
