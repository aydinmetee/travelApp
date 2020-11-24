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
  {path:'maps',component: MapsComponent, canActivate:[LoginGuard],data:{title: 'Maps'}},
  {path:'login',component:LoginComponent,data:{title:'Login'}},
  {path:'mycrew',component:MycrewComponent, canActivate:[LoginGuard],data:{title: 'MyCrew'}},
  {path:'register',component:RegisterComponent,data:{title: 'Register'}},
  {path:'dashboard',component:DashboardComponent,canActivate:[LoginGuard],data:{title: 'Dashboard'}},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'trips',component:TripsComponent, canActivate:[LoginGuard],data:{title: 'Trips'}},
  {path:'mytrips',component:MytripsComponent,data:{title: 'MyTrips'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
