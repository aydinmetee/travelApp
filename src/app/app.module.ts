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

@NgModule({
  declarations: [	
    AppComponent,
      NavbarComponent,
      LoginComponent,
      DashboardComponent,
      RegisterComponent,
      ErrorMessageComponent,
      MycrewComponent
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
    TableModule
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
