import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './blueprint/navbar/navbar.component';
import { FooterComponent } from './blueprint/footer/footer.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
