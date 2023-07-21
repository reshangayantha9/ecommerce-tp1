import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
   {path: '', redirectTo: 'main', pathMatch: "full"},
  {
    path: 'share',
    loadChildren: () => import('./module/share/share.module').then(m => m.ShareModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./module/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./module/security/security.module').then(m => m.SecurityModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
