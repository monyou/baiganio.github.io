import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './blueprint/sidebar/sidebar.component';
import { MainSectionComponent } from './blueprint/main-section/main-section.component';
import { FooterComponent } from './blueprint/footer/footer.component';
import { SidebarHiddenComponent } from './blueprint/sidebar-hidden/sidebar-hidden.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainSectionComponent,
    FooterComponent,
    SidebarHiddenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
