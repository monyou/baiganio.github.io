import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CookieLawModule } from 'angular2-cookie-law';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadingModule } from 'ngx-loading';
import { CoreModule } from './core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CustomAngularMaterialsModule } from './core/angular-materials.module';

import { NavbarComponent } from './blueprint/navbar/navbar.component';
import { FooterComponent } from './blueprint/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/_partials/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ConfirmationComponent } from './pages/_partials/confirmation/confirmation.component';
import { CourseListComponent } from './pages/courses/course-list/course-list.component';
import { CourseDetailComponent } from './pages/courses/course-detail/course-detail.component';
import { CourseItemComponent } from './pages/courses/course-list/course-item/course-item.component';
import { WelcomeComponent } from './pages/_partials/welcome/welcome.component';
import { AccountComponent } from './pages/account_management/settings/account/account.component';
import { AccessDeniedComponent } from './pages/_partials/access-denied/access-denied.component';
import { ServerAlertComponent } from './pages/_partials/server-alert/server-alert.component';
import { LandingPageComponent } from './blueprint/landing-page/landing-page.component';
import { ForgottenPasswordComponent } from './pages/_partials/forgotten-password/forgotten-password.component';
import { ResetPasswordComponent } from './pages/_partials/reset-password/reset-password.component';
import { WhoIsBaiGanioComponent } from './blueprint/who-is-bai-ganio/who-is-bai-ganio.component';
import { TeamComponent } from './blueprint/team/team.component';
import { PortfolioComponent } from './blueprint/portfolio/portfolio.component';
import { SettingsComponent } from './pages/account_management/settings/settings.component';
import { SubscriptionsComponent } from './pages/account_management/settings/subscriptions/subscriptions.component';
import { ProfileComponent } from './pages/account_management/profile/profile.component';
import { SubscriptionConfirmationComponent } from './pages/_partials/subscription-confirmation/subscription-confirmation.component';

import { BlogsComponent } from './pages/blogs/blogs.component';
import { SyntaxCheckerComponent } from './pages/_partials/syntax-checker/syntax-checker.component';
import { DashboardComponent } from './pages/account_management/settings/dashboard/dashboard.component';
import { InClassComponent } from './pages/account_management/settings/dashboard/in-class/in-class.component';
import { StudentInfoComponent } from './pages/account_management/settings/dashboard/student-info/student-info.component';
import { Enroll4CourseComponent } from './pages/courses/enroll4course/enroll4course.component';
import { ReportIssueComponent } from './pages/_partials/report-issue/report-issue.component';
import { CoursesAndScoresComponent } from './pages/account_management/settings/dashboard/courses-and-scores/courses-and-scores.component';
import { HomeworksComponent } from './pages/account_management/settings/dashboard/homeworks/homeworks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CoursesComponent,
    ConfirmationComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseItemComponent,
    WelcomeComponent,
    AccountComponent,
    AccessDeniedComponent,
    ServerAlertComponent,
    ForgottenPasswordComponent,
    ResetPasswordComponent,
    WhoIsBaiGanioComponent,
    TeamComponent,
    PortfolioComponent,
    SettingsComponent,
    SubscriptionsComponent,
    ProfileComponent,
    SubscriptionConfirmationComponent,
    BlogsComponent,
    SyntaxCheckerComponent,
    DashboardComponent,
    InClassComponent,
    StudentInfoComponent,
    Enroll4CourseComponent,
    ReportIssueComponent,
    CoursesAndScoresComponent,
    HomeworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingModule,
    CoreModule,
    CustomAngularMaterialsModule,
    CookieLawModule // import Angular's CookieLaw modules
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
