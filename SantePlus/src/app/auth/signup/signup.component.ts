import { Component } from '@angular/core';
import { AddpatientService } from 'src/app/_services/addpatient.service';
import { IPatient } from 'src/app/interfaces/patient';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  patient:IPatient = {
    id:0,
     nom:'',
     prenom:'',
     datenaiss:'',
     contact:'',
     password:'',


   }

  constructor(private addPatients:AddpatientService){}



  ajouterPatient(){
    this.addPatients.savePatient(this.patient).subscribe({
   next:data=>{
    console.log(data)
    alert('Enregistré avec succès');
   },
   error:err=>{
    console.log(err); }
  });
  }

}

