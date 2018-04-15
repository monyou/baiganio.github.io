import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

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
	// {
	// 	path: 'initialusers',
	// 	component: InitialUsersComponent
	// },
	// {
	// 	path: 'course',
	// 	component: CourseComponent
	// },
	// {
	// 	path: 'posts',
	// 	component: PostComponent
	// },
	// {
	// 	path: 'confirm',
	// 	component: ConfirmComponent
	// },
	// {
	// 	path: 'welcome',
	// 	component: WelcomeComponent
	// },
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
