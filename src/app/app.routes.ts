import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AlgorithmComponent } from './features/algorithm/algorithm.component';
import { CompareComponent } from './features/compare/compare.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'algorithm/:id',
        component: AlgorithmComponent
    },
    {
        path: 'compare/:id1,:id2',
        component: CompareComponent
    }
];
