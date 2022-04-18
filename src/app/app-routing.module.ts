import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { OrderRequestComponent} from './order-request/order-request.component';
import { RequestsComponent } from './requests/requests.component'
import { ItemsComponent } from './items/items.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MerchantComponent } from './merchant/merchant.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
   {path:'', redirectTo:'login', pathMatch:'full'},
   {path:'login', component:LoginComponent},
   {path:'signup', component:SignupComponent},
   {path:'dashboard', component:DashboardComponent},
   {path:'order-requests', component:OrderRequestComponent},
   {path:'requests', component:RequestsComponent},
   {path:'items', component:ItemsComponent},
   {path:'admin',component:AdminDashboardComponent},
   {path: 'merchant',component:MerchantComponent},
   {path: 'navbar',component:NavbarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
