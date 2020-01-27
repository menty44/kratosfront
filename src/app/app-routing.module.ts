import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { RegisterComponent } from "./register/register.component";
import { ReportsComponent } from "./reports/reports.component";
import { PricingComponent } from "./pricing/pricing.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { LoadaccountComponent } from "./loadaccount/loadaccount.component";
import { FinanceComponent } from "./finance/finance.component";
import {ResultsComponent} from "./results/results.component";
import {ResetpasswordComponent} from "./resetpassword/resetpassword.component";
import {HomeComponent} from "./home/home.component";
import {DownloadComponent} from "./download/download.component";
import {PrivacyComponent} from "./privacy/privacy.component";



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'report', component: ReportsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'loadaccount', component: LoadaccountComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'reset', component: ResetpasswordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '', pathMatch:'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
