import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent}  from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {EventsComponent} from './events/events.component';
import {SpecialEventsComponent} from './special-events/special-events.component';

const routes: Routes = [
{
  path:'',
  redirectTo:'/events',
  pathMatch:'full'
},
{
  path:'events',
  component:EventsComponent
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'login',
  component:LoginComponent
},
{path:'special',
component:SpecialEventsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
