import { AppRoutingModule } from './app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainSectionComponent } from './blueprint/main-section/main-section.component';
import { SidebarComponent } from './blueprint/sidebar/sidebar.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FakeComponent } from './pages/fake/fake.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SidebarComponent,
    LandingPageComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
