import { Component } from '@angular/core';
import { IRdv } from '../../../interfaces/rdv';
import { RdvService } from 'src/app/_services/rdv.service';

@Component({
  selector: 'app-rd-add',
  templateUrl: './rd-add.component.html',
  styleUrls: ['./rd-add.component.css']
})
export class RdAddComponent {

// hopital: hopital = new HopitalClass()
constructor(private addRdv: RdvService  ){

}
rdv:IRdv = {
 id:0,
 date_heure: '',
 id_patient:0,
 id_medecin:0,

}


ajouterRdv(){
 this.addRdv.saveRdv(this.rdv).subscribe({
next:data=>{
 console.log(data)
 alert('Enregistré avec succès');
},
error:err=>{
 console.log(err); }
});
}





}
