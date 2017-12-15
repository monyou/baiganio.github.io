import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakeComponent } from './pages/fake/fake.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
	{
		path: 'fake',
		component: FakeComponent
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