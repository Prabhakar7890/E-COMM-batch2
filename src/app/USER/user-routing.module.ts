import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './HOME/home/home.component';
import { MainComponent } from './HOME/main/main.component';
import { ForgetComponent } from './LOGIN/forget/forget.component';
import { LoginComponent } from './LOGIN/login/login.component';
import { RegisterComponent } from './LOGIN/register/register.component';
import { ResetComponent } from './LOGIN/reset/reset.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children: [
      {
        path: '',
        component:HomeComponent 
      },
      {
        path: 'login',
        component:LoginComponent 
      },
      {
        path: 'forget',
        component:ForgetComponent
      },
      {
        path: 'register',
        component:RegisterComponent
      },
      {
        path: 'reset',
        component:ResetComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class USERRoutingModule { }
