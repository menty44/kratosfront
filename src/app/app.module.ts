import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashmenuComponent } from './dashmenu/dashmenu.component';
import { LoadaccountComponent } from './loadaccount/loadaccount.component';
import { ReportsComponent } from './reports/reports.component';
import { ResultsComponent } from './results/results.component';
import { PricingComponent } from './pricing/pricing.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationserviceService } from 'services/navigationservice.service';
import { FinanceComponent } from './finance/finance.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { TeamComponent } from './team/team.component';
import { PrivacyComponent } from './privacy/privacy.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ResetpasswordComponent,
    DashboardComponent,
    DashmenuComponent,
    LoadaccountComponent,
    ReportsComponent,
    ResultsComponent,
    PricingComponent,
    DisclaimerComponent,
    ContactComponent,
    FinanceComponent,
    HomeComponent,
    DownloadComponent,
    TeamComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NavigationserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
