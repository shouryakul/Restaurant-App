import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { MenuCartComponent } from './menu-cart/menu-cart.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  {path:"",redirectTo:"/log",pathMatch:"full"},
  {path:"reg", component:RegComponent},
  {path:"log", component:LoginComponent},
  {path: "dash", component: DashboardComponent},
  {path:"menu", component:MenuCartComponent},
  
  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
