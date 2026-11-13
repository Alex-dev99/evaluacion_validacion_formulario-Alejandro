import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';

export const routes: Routes = [
    {path: 'form',component: Formulario,},
    {path: '', pathMatch: 'full', redirectTo: 'form'},


];
