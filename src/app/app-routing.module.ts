import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./shared/pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./shared/pages/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'inicio',
    loadChildren: () => import('./shared/pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('./shared/pages/quienes-somos/quienes-somos.module').then( m => m.QuienesSomosPageModule)
  },
  {
    path: 'como-ayudar',
    loadChildren: () => import('./shared/pages/como-ayudar/como-ayudar.module').then( m => m.ComoAyudarPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./shared/pages/contactos/contactos.module').then( m => m.ContactosPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
