import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HiddenSideNavComponent } from './hidden-side-nav/hidden-side-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HiddenSideNavComponent,
    SidebarComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
