import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: '', component: HomeComponent}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
