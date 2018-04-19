import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';

import { NavbarComponent } from './blueprint/navbar/navbar.component';
import { FooterComponent } from './blueprint/footer/footer.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderService } from './core/services/header/header.service';
import { BackendService } from './core/services/backend/backend.service';
import { NotFoundComponent } from './pages/_partials/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseService } from './core/services/course/course.service';
import { ConfirmationComponent } from './pages/_partials/confirmation/confirmation.component';
import { CourseListComponent } from './pages/courses/course-list/course-list.component';
import { CourseDetailComponent } from './pages/courses/course-detail/course-detail.component';
import { CourseItemComponent } from './pages/courses/course-list/course-item/course-item.component';
import { WelcomeComponent } from './pages/_partials/welcome/welcome.component';


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
    ConfirmationComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseItemComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    LoadingModule
  ],
  providers: [HeaderService, BackendService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
