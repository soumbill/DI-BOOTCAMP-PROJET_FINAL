import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AddhopitalService } from 'src/app/_services/addhopital.service';

@Component({
  selector: 'app-ho-edit',
  templateUrl: './ho-edit.component.html',
  styleUrls: ['./ho-edit.component.css']
})
export class HoEditComponent implements OnInit{

  id! :any
  medecin:any ;// Propriété pour stocker les informations de l'hôpital

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private serviceHopital : AddhopitalService
  ){}

  ngOnInit(): void {
    // Récupération de l'ID de l'hôpital à partir des paramètres de l'URL
    this.route.params.subscribe(params => {
      console.log(params);
      console.log(params['id']);
      // Récupération des informations de l'hôpital à partir de l'API
      this.http.get("http://localhost:8011/medecin/one/"+params['id'])
            .subscribe((res:any) => { console.log(res);
             this.medecin = res});
    });
  }

  // Fonction pour mettre à jour les informations de l'hôpital
  EditHopital(){
    // Récupération de l'ID de l'hôpital à partir des paramètres de l'URL
    this.id = this.route.snapshot.params['id']
    // Appel du service pour mettre à jour les informations de l'hôpital
    this.serviceHopital.updateHopital(this.id).subscribe(
      (data:any)=>{
        this.medecin = data.data;
      }
    )
  }



}
