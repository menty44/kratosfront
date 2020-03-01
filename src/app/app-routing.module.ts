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

import { AuthGuard } from './authguard.guard';
import {VerifyComponent} from "./verify/verify.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DashComponent} from "./dash/dash.component";
import {StaffComponent} from "./staff/staff.component";
import {StaffcreateComponent} from "./staffcreate/staffcreate.component";
import {TaxComponent} from "./tax/tax.component";
import {TaxcreateComponent} from "./taxcreate/taxcreate.component";
import {ProfileComponent} from "./profile/profile.component";
import {StoreComponent} from "./store/store.component";
import {CalenderComponent} from "./calender/calender.component";
import {PurchasesComponent} from "./purchases/purchases.component";
import {CustomersComponent} from "./customers/customers.component";
import {CustomercreateComponent} from "./customercreate/customercreate.component";
import {StudiosComponent} from "./studios/studios.component";
import {StudioscreateComponent} from "./studioscreate/studioscreate.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {RoomscreateComponent} from "./roomscreate/roomscreate.component";
import {SuitsComponent} from "./suits/suits.component";
import {SuitscreateComponent} from "./suitscreate/suitscreate.component";
import {StorecreateComponent} from "./storecreate/storecreate.component";
import {ScheduletryoutComponent} from "./scheduletryout/scheduletryout.component";
import {ScheduletryoutcreateComponent} from "./scheduletryoutcreate/scheduletryoutcreate.component";
import {ScheduleComponent} from "./schedule/schedule.component";
import {SchedulecreateComponent} from "./schedulecreate/schedulecreate.component";
import {TrainingsessiontoolComponent} from "./trainingsessiontool/trainingsessiontool.component";
import {TrainingsessiontoolcreateComponent} from "./trainingsessiontoolcreate/trainingsessiontoolcreate.component";
import {RanksComponent} from "./ranks/ranks.component";
import {RankscreateComponent} from "./rankscreate/rankscreate.component";
import {PaymentmethodComponent} from "./paymentmethod/paymentmethod.component";
import {PaymentmethodcreateComponent} from "./paymentmethodcreate/paymentmethodcreate.component";
import {TrainingdeviceComponent} from "./trainingdevice/trainingdevice.component";
import {TrainingdevicecreateComponent} from "./trainingdevicecreate/trainingdevicecreate.component";
import {RewardsComponent} from "./rewards/rewards.component";
import {RewardscreateComponent} from "./rewardscreate/rewardscreate.component";
import {ProductitemsComponent} from "./productitems/productitems.component";
import {ProductitemcreateComponent} from "./productitemcreate/productitemcreate.component";
import {CredititemsComponent} from "./credititems/credititems.component";
import {CredititemscreateComponent} from "./credititemscreate/credititemscreate.component";
import {SubscriptionitemsComponent} from "./subscriptionitems/subscriptionitems.component";
import {SubscriptionitemscreateComponent} from "./subscriptionitemscreate/subscriptionitemscreate.component";
import {PromotionsComponent} from "./promotions/promotions.component";
import {PromotionscreateComponent} from "./promotionscreate/promotionscreate.component";
import {ListproductsComponent} from "./listproducts/listproducts.component";

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

  { path: 'dash', component: DashComponent },

  { path: 'staff', component: StaffComponent },
  { path: 'staff/create', component: StaffcreateComponent },

  { path: 'tax-scheme', component: TaxComponent },
  { path: 'tax-scheme/create', component: TaxcreateComponent },

  { path: 'profile', component: ProfileComponent },

  { path: 'store', component: StoreComponent },
  { path: 'store/list', component: ListproductsComponent },

  { path: 'calendar', component: CalenderComponent },

  { path: 'purchases', component: PurchasesComponent },

  { path: 'training-devices', component: TrainingdeviceComponent },
  { path: 'training-devices/create', component: TrainingdevicecreateComponent },

  { path: 'customers', component: CustomersComponent },
  { path: 'customers/create', component: CustomercreateComponent },

  { path: 'rewards', component: RewardsComponent },
  { path: 'rewards/create', component: RewardscreateComponent },

  { path: 'studios', component: StudiosComponent },
  { path: 'studios/create', component: StudioscreateComponent },

  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/create', component: RoomscreateComponent },

  { path: 'suits', component: SuitsComponent },
  { path: 'suits/create', component: SuitscreateComponent },

  { path: 'store', component: StoreComponent },
  { path: 'store/create', component: StorecreateComponent },

  { path: 'schedule', component: ScheduleComponent},
  { path: 'customers/create', component: SchedulecreateComponent },

  { path: 'schedule-try-out', component: ScheduletryoutComponent },
  { path: 'schedule-try-out/create', component: ScheduletryoutcreateComponent },

  { path: 'training-sessions-tool', component: TrainingsessiontoolComponent },
  { path: 'training-sessions-tool/create', component: TrainingsessiontoolcreateComponent },

  { path: 'ranks', component: RanksComponent },
  { path: 'ranks/create', component: RankscreateComponent },

  { path: 'promotions', component: PromotionsComponent },
  { path: 'promotions/create', component: PromotionscreateComponent },

  { path: 'credit-items', component: CredititemsComponent },
  { path: 'credit-items/create', component: CredititemscreateComponent },

  { path: 'subscription-items', component: SubscriptionitemsComponent },
  { path: 'subscription-items/create', component: SubscriptionitemscreateComponent },

  { path: 'product-items', component: ProductitemsComponent },
  { path: 'product-items/create', component: ProductitemcreateComponent },

  { path: 'specific-payment-methods', component: PaymentmethodComponent },
  { path: 'specific-payment-methods/create', component: PaymentmethodcreateComponent },


  // { path: 'home', component: HomeComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'verify', component: VerifyComponent },
  // { path: '', pathMatch:'full', redirectTo: '/home'},
  // {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "/login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
