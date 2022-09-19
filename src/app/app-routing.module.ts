import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'add-usuario/:id/:nome/:usuario/:senha/:nivel',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'mostrar-usuario/:id/:nome/:usuario/:nivel',
    loadChildren: () => import('./mostrar-usuario/mostrar-usuario.module').then( m => m.MostrarUsuarioPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'mostrar-evento/:id/:nome/:data/:capacidade/:usuario_id',
    loadChildren: () => import('./mostrar-evento/mostrar-evento.module').then( m => m.MostrarEventoPageModule)
  },
  {
    path: 'add-evento',
    loadChildren: () => import('./add-evento/add-evento.module').then( m => m.AddEventoPageModule)
  },
  {
    path: 'add-evento/:id/:nome/:data/:capacidade/:usuario_id',
    loadChildren: () => import('./add-evento/add-evento.module').then( m => m.AddEventoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
