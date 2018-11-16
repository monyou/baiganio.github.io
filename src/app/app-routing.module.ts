import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/_partials/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ConfirmationComponent } from './pages/_partials/confirmation/confirmation.component';
import { WelcomeComponent } from './pages/_partials/welcome/welcome.component';
import { AccountComponent } from './pages/account_management/settings/account/account.component';
import { AccessDeniedComponent } from './pages/_partials/access-denied/access-denied.component';
import { AuthGuard } from './core/services/auth/auth.guard';
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
import { StudentInfoComponent } from './pages/account_management/settings/dashboard/student-info/student-info.component';
import { Enroll4CourseComponent } from './pages/courses/enroll4course/enroll4course.component';
import { ReportIssueComponent } from './pages/_partials/report-issue/report-issue.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LandingPageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'confirmation/:token',
        component: ConfirmationComponent
    },
    {
        path: 'passwordreset/:token',
        component: ResetPasswordComponent
    },
    {
        path: 'forgotten-password',
        component: ForgottenPasswordComponent
    },
    {
        path: '403',
        component: AccessDeniedComponent
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: 'enroll4course',
        component: Enroll4CourseComponent
        // canActivate: [AuthGuard]
    },
    {
        path: 'courses',
        component: CoursesComponent,
    },
    {
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'report-issue',
        component: ReportIssueComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {
                path: '',
                redirectTo: 'account',
                pathMatch: 'full'
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'account',
                component: AccountComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'subscriptions',
                component: SubscriptionsComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: 'subscription/:token',
        component: SubscriptionConfirmationComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'server-alert',
        component: ServerAlertComponent
    },
    {
        path: 'who-is-bai-ganio',
        component: WhoIsBaiGanioComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'roslyn',
        component: SyntaxCheckerComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: [AuthGuard]
})
export class AppRoutingModule { }
