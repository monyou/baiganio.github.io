import { AppRoutingModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainSectionComponent } from './blueprint/main-section/main-section.component';
import { SidebarComponent } from './blueprint/sidebar/sidebar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FakeComponent } from './pages/fake/fake.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SidebarHiddenComponent } from './blueprint/sidebar-hidden/sidebar-hidden.component';
import { FooterComponent } from './blueprint/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SidebarComponent,
    LandingPageComponent,
    FakeComponent,
    NotFoundComponent,
    SidebarHiddenComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
