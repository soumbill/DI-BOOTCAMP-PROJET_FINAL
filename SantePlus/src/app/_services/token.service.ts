import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  // Cette fonction enregistre un jeton d'authentification dans le stockage local et redirige l'utilisateur vers la page admin
  saveToken(token: string): void{
    localStorage.setItem('token', token)
    this.router.navigate(['admin'])
  }

  // Cette fonction vérifie si l'utilisateur est connecté en vérifiant la présence d'un jeton d'authentification dans le stockage local
  isLogged(): boolean{
    const token = localStorage.getItem('token')
    console.log(token)
    return !! token
  }

  // Cette fonction supprime un jeton d'authentification du stockage local et redirige l'utilisateur vers la page d'accueil
  clearToken():void{
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  // Cette fonction supprime un jeton d'authentification expiré du stockage local et redirige l'utilisateur vers la page d'authentification
  clearTokenExpired():void{
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
  }

  // Cette fonction récupère le jeton d'authentification du stockage local
  getToken(): string | null{
    return localStorage.getItem('token')
  }
}
