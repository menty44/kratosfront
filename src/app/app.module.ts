import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';


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

import  { MessageBusModule } from 'ngx-message-bus';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MenubuttonsComponent } from './menubuttons/menubuttons.component';
import { VerifyComponent } from './verify/verify.component';
import { DashComponent } from './dash/dash.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { HeaderComponent } from './header/header.component';
import { StudiosComponent } from './studios/studios.component';
import { StudioscreateComponent } from './studioscreate/studioscreate.component';
import { StaffcreateComponent } from './staffcreate/staffcreate.component';
import { StaffComponent } from './staff/staff.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { ProductitemsComponent } from './productitems/productitems.component';
import { ProductitemcreateComponent } from './productitemcreate/productitemcreate.component';
import { CustomercreateComponent } from './customercreate/customercreate.component';
import { CustomersComponent } from './customers/customers.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { CalenderComponent } from './calender/calender.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomscreateComponent } from './roomscreate/roomscreate.component';
import { SuitsComponent } from './suits/suits.component';
import { SuitscreateComponent } from './suitscreate/suitscreate.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RewardscreateComponent } from './rewardscreate/rewardscreate.component';
import { CreateComponent } from './create/create.component';
import { TaxcreateComponent } from './taxcreate/taxcreate.component';
import { TaxComponent } from './tax/tax.component';
import { RanksComponent } from './ranks/ranks.component';
import { RankscreateComponent } from './rankscreate/rankscreate.component';
import { TrainingsessiontoolComponent } from './trainingsessiontool/trainingsessiontool.component';
import { TrainingsessiontoolcreateComponent } from './trainingsessiontoolcreate/trainingsessiontoolcreate.component';
import { TrainingdevicecreateComponent } from './trainingdevicecreate/trainingdevicecreate.component';
import { TrainingdeviceComponent } from './trainingdevice/trainingdevice.component';
import { ScheduletryoutComponent } from './scheduletryout/scheduletryout.component';
import { ScheduletryoutcreateComponent } from './scheduletryoutcreate/scheduletryoutcreate.component';
import { StorecreateComponent } from './storecreate/storecreate.component';
import { SchedulecreateComponent } from './schedulecreate/schedulecreate.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { PaymentmethodcreateComponent } from './paymentmethodcreate/paymentmethodcreate.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { FooternewComponent } from './footernew/footernew.component';
import {DataTablesModule} from "angular-datatables";


import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { CredititemsComponent } from './credititems/credititems.component';
import { CredititemscreateComponent } from './credititemscreate/credititemscreate.component';
import { SubscriptionitemscreateComponent } from './subscriptionitemscreate/subscriptionitemscreate.component';
import { SubscriptionitemsComponent } from './subscriptionitems/subscriptionitems.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { PromotionscreateComponent } from './promotionscreate/promotionscreate.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

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
    PrivacyComponent,
    MenubuttonsComponent,
    VerifyComponent,
    DashComponent,
    LeftnavComponent,
    HeaderComponent,
    StudiosComponent,
    StudioscreateComponent,
    StaffcreateComponent,
    StaffComponent,
    ProfileComponent,
    StoreComponent,
    ProductitemsComponent,
    ProductitemcreateComponent,
    CustomercreateComponent,
    CustomersComponent,
    PurchasesComponent,
    CalenderComponent,
    RoomsComponent,
    RoomscreateComponent,
    SuitsComponent,
    SuitscreateComponent,
    RewardsComponent,
    RewardscreateComponent,
    CreateComponent,
    TaxcreateComponent,
    TaxComponent,
    RanksComponent,
    RankscreateComponent,
    TrainingsessiontoolComponent,
    TrainingsessiontoolcreateComponent,
    TrainingdevicecreateComponent,
    TrainingdeviceComponent,
    ScheduletryoutComponent,
    ScheduletryoutcreateComponent,
    StorecreateComponent,
    SchedulecreateComponent,
    ScheduleComponent,
    PaymentmethodComponent,
    PaymentmethodcreateComponent,
    PreloaderComponent,
    FooternewComponent,
    CredititemsComponent,
    CredititemscreateComponent,
    SubscriptionitemscreateComponent,
    SubscriptionitemsComponent,
    PromotionsComponent,
    PromotionscreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MessageBusModule,
        StoreModule.forRoot({count: counterReducer}),
        DataTablesModule,
        FusionChartsModule
    ],
  providers: [
    NavigationserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
