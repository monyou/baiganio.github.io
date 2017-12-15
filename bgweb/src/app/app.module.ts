import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './blueprint/sidebar/sidebar.component';
import { MainSectionComponent } from './blueprint/main-section/main-section.component';
import { FooterComponent } from './blueprint/footer/footer.component';
import { SidebarHiddenComponent } from './blueprint/sidebar-hidden/sidebar-hidden.component';
import { LandingComponent } from './pages/landing/landing.component';
import { FakeComponent } from './pages/fake/fake.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainSectionComponent,
    FooterComponent,
    SidebarHiddenComponent,
    LandingComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
