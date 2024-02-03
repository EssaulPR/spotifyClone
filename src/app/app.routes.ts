import { Routes } from '@angular/router';
import { HomepagesComponent } from '@modules/home/pages/homepages/homepages.component';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component:HomepagesComponent,
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    }
];
