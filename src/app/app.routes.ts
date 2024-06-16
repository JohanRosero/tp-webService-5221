import { Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CarMakerComponent } from './components/car-maker/car-maker.component';
import { ApiEleccionComponent } from './components/api-eleccion/api-eleccion.component';
import { HomeComponent } from './components/home/home.component';
import { Parcial2024Component } from './components/parcial2024/parcial2024.component';

export const routes: Routes = [
    { path: 'traductor', component: TraductorComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: 'carMaker', component: CarMakerComponent },
    { path: 'apiEleccion', component: ApiEleccionComponent },
    { path: 'home', component: HomeComponent },
    { path: 'parcial2024', component: Parcial2024Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
