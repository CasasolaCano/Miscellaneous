import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent, children: [
        {path: 'new', component: NewUserComponent},
        {path: 'edit', component: EditUserComponent},
        {path: 'detail', component: DetailUserComponent},
        {path: '', component: DetailUserComponent}
    ]},
    { path: '', component: HomeComponent}
];

export const APP_ROUTING = RouterModule.forRoot(routes);
