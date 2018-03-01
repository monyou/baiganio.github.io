import { BackendService } from './core/services/backend/backend.service';
import { HeaderService } from './core/services/header/header.service';
import { InitialUsersService } from './core/services/initial-users/initial-users.service';
import { AppRoutingModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppComponent } from './app.component';

import { SidebarComponent } from './blueprint/sidebar/sidebar.component';
import { SidebarHiddenComponent } from './blueprint/sidebar-hidden/sidebar-hidden.component';
import { FooterComponent } from './blueprint/footer/footer.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InitialUsersComponent } from './pages/initial-users/initial-users.component';
import { UserViewService } from './core/services/userview/userview.service';
import { CourseService } from './core/services/course/course.service';
import { CourseComponent } from './pages/course/course.component';
import { PostService } from './core/services/posts/post.service';
import { PostComponent } from './pages/post/post.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LandingPageComponent,
    NotFoundComponent,
    SidebarHiddenComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    InitialUsersComponent,
    CourseComponent,
    PostComponent,
    WelcomeComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgxSpinnerModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '80px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  })
  ],
  providers: [InitialUsersService, UserViewService, HeaderService, BackendService, UserViewService, CourseService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
