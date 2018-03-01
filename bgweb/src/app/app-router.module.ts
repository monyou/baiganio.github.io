import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { InitialUsersComponent } from './pages/initial-users/initial-users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseComponent } from './pages/course/course.component';
import { PostComponent } from './pages/post/post.component';

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
		path: 'initialusers',
		component: InitialUsersComponent
	},
	{
		path: 'course',
		component: CourseComponent
	},
	{
		path: 'posts',
		component: PostComponent
	},
	{
		path: 'confirm',
		component: ConfirmComponent
	},
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }