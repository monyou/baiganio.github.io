import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './blueprint/navbar/navbar.component';
import { FooterComponent } from './blueprint/footer/footer.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderService } from './core/services/header/header.service';
import { BackendService } from './core/services/backend/backend.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseService } from './core/services/course/course.service';
import { ConfirmationComponent } from './pages/_partials/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CoursesComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [HeaderService, BackendService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
