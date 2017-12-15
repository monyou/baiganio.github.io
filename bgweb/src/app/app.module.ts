import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainSectionComponent } from './blueprint/main-section/main-section.component';
import { SidebarComponent } from './blueprint/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
