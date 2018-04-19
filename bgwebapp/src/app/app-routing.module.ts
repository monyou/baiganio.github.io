import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/_partials/not-found/not-found.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ConfirmationComponent } from './pages/_partials/confirmation/confirmation.component';
import { WelcomeComponent } from './pages/_partials/welcome/welcome.component';

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
	// {
	// 	path: 'initialusers',
	// 	component: InitialUsersComponent
	// },
	{
		path: 'courses',
		component: CoursesComponent
	},
	// {
	// 	path: 'posts',
	// 	component: PostComponent
	// },
	// {
	// 	path: 'confirm',
	// 	component: ConfirmComponent
	// },
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: '**',
		component: LandingPageComponent
	}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
providers: []
})
export class AppRoutingModule { }
