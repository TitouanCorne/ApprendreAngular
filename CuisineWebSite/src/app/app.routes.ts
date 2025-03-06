import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllRecepesComponent } from './all-recepes/all-recepes.component';
import { DetailsComponent } from './details/details.component';
import { MyRecepesComponent } from './my-recepes/my-recepes.component';

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
    },
    {
        path : 'details/:id',
        component : DetailsComponent,
        title : 'Recepe details'
    },
    {
        path : 'myrecepes/:user',
        component : MyRecepesComponent,
        title : 'My recepes'
    }
];

export default routeConfig;