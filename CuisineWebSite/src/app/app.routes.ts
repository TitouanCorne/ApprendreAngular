import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllRecepesComponent } from './all-recepes/all-recepes.component';
import { DetailsComponent } from './details/details.component';
import { MyRecepesComponent } from './my-recepes/my-recepes.component';
import { NewRecepeComponent } from './new-recepe/new-recepe.component';

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
        path : 'myrecepes',
        component : MyRecepesComponent,
        title : 'My recepes'
    },
    {
        path : 'newrecepe',
        component : NewRecepeComponent,
        title : 'New recepe'
    }
];

export default routeConfig;