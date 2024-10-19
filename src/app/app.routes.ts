import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
// import { RouterModule, Routes } from '@angular/router';
 

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'resume',component:ResumeComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',component:HomeComponent,pathMatch:'full'}
];
 
 
