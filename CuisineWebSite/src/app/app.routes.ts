import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllRecepesComponent } from './all-recepes/all-recepes.component';

const routeConfig: Routes = [
    {
        path : '',
        component : HomeComponent,
        title : 'Home page'
    },
    {
        path : 'allrecepes',
        component : AllRecepesComponent,
        title : 'All recepes'
    }
];

export default routeConfig;