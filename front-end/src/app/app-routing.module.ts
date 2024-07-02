import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectComponent } from './components/project/project.component';
import { PartnerComponent } from './components/partner/partner.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WebpageComponent } from './components/webpage/webpage.component';
import { HomeComponent } from './components/home/home.component';
import { HomearComponent } from './components/homear/homear.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path: 'dashboard',component:DashboardComponent},
  {path: 'project',component:ProjectComponent},
  {path: 'partner',component:PartnerComponent},
  {path: 'gallery',component:GalleryComponent},
  {path: 'home-en',component:HomeComponent},
  {path: 'home-ar',component:HomearComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
