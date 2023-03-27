import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ho-index',
  templateUrl: './ho-index.component.html',
  styleUrls: ['./ho-index.component.css']
})
export class HoIndexComponent implements OnInit {

  medecinList: any[] = [];  // Une liste qui contiendra les hopitaux récupérés depuis le serveur
  displayedHopitaux: any[] = [];  // Une liste des hopitaux qui seront affichés dans la vue


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadHopitals();  // Charge la liste complète des hopitaux au démarrage du composant
  }

  loadHopitals(): void {
    // Récupère la liste complète des hopitaux depuis le serveur
    this.http.get<any[]>('http://localhost:8011/medecin/all').subscribe(
      data => {
        console.log(data);  // Affiche la liste récupérée dans la console
        this.medecinList = data;
        this.displayedHopitaux = this.medecinList;  // Affiche les premiers hopitaux
      }
    );
  }



}
