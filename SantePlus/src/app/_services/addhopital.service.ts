import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddhopitalService {

  constructor( private http: HttpClient) { }
  baseUrl = "http://localhost:8011/"

  // Cette fonction récupère les données d'un hôpital via une requête GET
  getHopitalData() {
    // Ajout des en-têtes pour permettre l'accès depuis n'importe quelle origine (Access-Control-Allow-Origin)
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8011/', { headers });
  }

  // Cette fonction enregistre les données d'un hôpital via une requête POST
  saveHopital(data:any){
    return this.http.post(this.baseUrl + 'medecin/add' ,data);
  }

  // Cette fonction récupère les données de tous les hôpitaux via une requête GET
  getHopital() {
    return this.http.get(this.baseUrl + 'medecin/all');
  }

  // Cette fonction supprime un hôpital spécifique via une requête DELETE
  deleteHopital(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/medecin/delete/' ,id);
  }

  // Cette fonction met à jour les données d'un hôpital via une requête PUT
  updateHopital(id:any){
    return this.http.put(this.baseUrl + 'medecin/edit/' ,id);
  }

  saveRdv(data:any){
    return this.http.post(this.baseUrl + 'rdv/add' ,data);
  }


}
