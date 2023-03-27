import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddpatientService {

  // Cette fonction récupère les données d'un patient via une requête GET
  getPatientData() {
    // Ajout des en-têtes pour permettre l'accès depuis n'importe quelle origine (Access-Control-Allow-Origin)
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8011/', { headers });
  }

  constructor( private http: HttpClient) { }
  baseUrl = "http://localhost:8011/"

  // Cette fonction enregistre les données d'un patient via une requête POST
  savePatient(data:any){
    return this.http.post(this.baseUrl + 'patient/add', data);
  }
}
