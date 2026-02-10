import { Routes } from '@angular/router';
import { RechercheComponent } from './component/recherche-component/recherche-component';
import { HomeComponent } from './component/home-component/home-component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'recherche', component: RechercheComponent } 
];