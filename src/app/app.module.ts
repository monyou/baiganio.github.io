import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HiddenSideNavComponent } from './hidden-side-nav/hidden-side-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BannerComponent } from './banner/banner.component';
import { WowSliderComponent } from './utils/wow-slider/wow-slider.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HiddenSideNavComponent,
    SidebarComponent,
    MainContentComponent,
    BannerComponent,
    WowSliderComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
