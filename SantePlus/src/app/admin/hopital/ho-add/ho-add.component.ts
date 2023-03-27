import { Component } from '@angular/core';
import { IHopital } from 'src/app/interfaces/hopital';
import { AddhopitalService } from '../../../_services/addhopital.service';

@Component({
  selector: 'app-ho-add',
  templateUrl: './ho-add.component.html',
  styleUrls: ['./ho-add.component.css']
})
export class HoAddComponent {
  // hopital: hopital = new HopitalClass()
   constructor(private addMedecin: AddhopitalService  ){

   }
  medecin:IHopital = {
   id:0,
    nom:'',
    prenom:'',
    specialite:'',
    contact:'',
    password:'',
  }


  ajouterHopital(){
    this.addMedecin.saveHopital(this.medecin).subscribe({
   next:data=>{
    console.log(data)
    alert('Enregistré avec succès');
   },
   error:err=>{
    console.log(err); }
  });
  }






  }




