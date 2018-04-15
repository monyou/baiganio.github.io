import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

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
		component: LogInComponent
	},
	{
		path: 'signup',
		component: SignUpComponent
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
