import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HiddenSideNavComponent } from './hidden-side-nav/hidden-side-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BannerComponent } from './banner/banner.component';
import { ErrorComponent } from './utils/error/error.component';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },  
  // { path: '', component: AppComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HiddenSideNavComponent,
    SidebarComponent,
    MainContentComponent,
    BannerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true } ) // <-- debugging purposes only 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
