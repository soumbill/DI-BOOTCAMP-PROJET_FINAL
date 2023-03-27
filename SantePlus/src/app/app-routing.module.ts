import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';
import { AuthGuard } from './_helpers/auth.guard';

// Définition des routes pour l'application
const routes: Routes = [
  {
    // Route pour la page d'accueil
    path: '',
    loadChildren: () => import('./public/public.module')
    .then(m => m.PublicModule)
  },
  {
    // Route pour la page d'administration
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
    .then(m => m.AdminModule),
    canActivate:[AuthGuard] // Utilisation d'AuthGuard pour protéger la route
  },
  {
    // Route pour les pages d'authentification
    path: 'auth',
    loadChildren: () => import('./auth/auth.module')
    .then(m => m.AuthModule)
  },
  {
    // Route générique pour gérer les URL invalides
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
