import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RdvService {

  constructor( private http: HttpClient) { }
  baseUrl = "http://localhost:8011/"

  // Cette fonction récupère les données d'un hôpital via une requête GET
  getRdvData() {
    // Ajout des en-têtes pour permettre l'accès depuis n'importe quelle origine (Access-Control-Allow-Origin)
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:8011/', { headers });
  }

  // Cette fonction enregistre les données d'un hôpital via une requête POST
  saveRdv(data:any){
    return this.http.post(this.baseUrl + 'rdv/add' ,data);
  }

  // Cette fonction récupère les données de tous les hôpitaux via une requête GET
  getRdv() {
    return this.http.get(this.baseUrl + 'rdv/all');
  }

  // Cette fonction supprime un hôpital spécifique via une requête DELETE
  deleteRdv(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/rdv/delete/' ,id);
  }

  // Cette fonction met à jour les données d'un hôpital via une requête PUT
  updateRdv(id:any){
    return this.http.put(this.baseUrl + 'rdv/edit/' ,id);
  }


}
