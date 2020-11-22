import { MytripsComponent } from './pages/mytrips/mytrips.component';
import { TripsComponent } from './pages/trips/trips.component';
import { MycrewComponent } from './pages/mycrew/mycrew.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './pages/login/login.guard';
import { MapsComponent } from './pages/maps/maps.component';

const routes: Routes = [
  {path:'maps',component: MapsComponent, canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},
  {path:'mycrew',component:MycrewComponent, canActivate:[LoginGuard]},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[LoginGuard]},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'trips',component:TripsComponent, canActivate:[LoginGuard]},
  {path:'mytrips',component:MytripsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
