import { Routes } from '@angular/router';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { HomeComponent } from './components/home/home.component';
import { SimpleTableComponent } from './components/simple-table/simple-table.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'simple-form', component: SimpleFormComponent},
    {path: 'simple-table', component: SimpleTableComponent}
];
