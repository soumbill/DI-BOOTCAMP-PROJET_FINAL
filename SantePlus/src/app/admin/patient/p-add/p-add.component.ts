import { Component } from '@angular/core';
import { AddpatientService } from '../../../_services/addpatient.service';
import { IPatient } from '../../../interfaces/patient';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css']
})
export class PAddComponent {

  // constructor(private addPatients:  AddpatientService ){}


  // patient:IPatient = {
  //   id:0,
  //    nom:'',
  //    telephone:'',
  //    password:'',
  //    abonnement_mensuel:0,
  //    abonnement_annuel:0,

  //  }

  //  ajouterPatient(){
  //   this.addPatients.savePatient(this.patient).subscribe({
  //  next:data=>{
  //   console.log(data)
  //   alert('Enregistré avec succès');
  //  },
  //  error:err=>{
  //   console.log(err); }
  // });
  // }



}


// _______________________________________________________________









