import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlinesComponent } from './airline/add-airlines/add-airlines.component';
import { HistoryComponent } from './booking/history/history.component';
import { HomeComponent } from './home/home.component';
import { AddInventoryComponent } from './inventory/add-inventory/add-inventory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'history',
    component:HistoryComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },{
    path: 'airline',
    component: AddAirlinesComponent
  },
  {
    path: 'inventory',
    component: AddInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
