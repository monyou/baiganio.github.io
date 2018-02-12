import { BackendService } from './core/services/backend/backend.service';
import { HeaderService } from './core/services/header/header.service';
import { InitialUsersService } from './core/services/initial-users/initial-users.service';
import { AppRoutingModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MainSectionComponent } from './blueprint/main-section/main-section.component';
import { SidebarComponent } from './blueprint/sidebar/sidebar.component';
import { SidebarHiddenComponent } from './blueprint/sidebar-hidden/sidebar-hidden.component';
import { FooterComponent } from './blueprint/footer/footer.component';
import { BannerComponent } from './blueprint/banner/banner.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FakeComponent } from './pages/fake/fake.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InitialUsersComponent } from './pages/initial-users/initial-users.component';
import { UserViewService } from './core/services/userview/userview.service';


@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SidebarComponent,
    LandingPageComponent,
    FakeComponent,
    NotFoundComponent,
    SidebarHiddenComponent,
    FooterComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    InitialUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [InitialUsersService, UserViewService, HeaderService, BackendService, UserViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
