
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakeComponent } from './pages/fake/fake.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

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
		path: 'fake',
		component: FakeComponent
    }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }