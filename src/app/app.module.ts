import { MapsComponent } from './pages/maps/maps.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './pages/login/login.guard';
import { HttpClientModule } from '@angular/common/http';
import { GMapModule } from 'primeng/gmap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/register/register.component';
import {DropdownModule} from 'primeng/dropdown';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MycrewComponent } from './pages/mycrew/mycrew.component';
import { TableModule } from 'primeng/table';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [	
    AppComponent,
      NavbarComponent,
      LoginComponent,
      DashboardComponent,
      RegisterComponent,
      ErrorMessageComponent,
      MycrewComponent,
      MapsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    GMapModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1dAOr8AL0DEM-jzkq5VnnMQniMHqF77Y',
      libraries: ['places']
    }),
    CarouselModule,
    RatingModule,
    InputTextareaModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
