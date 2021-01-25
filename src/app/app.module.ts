import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { LandingComponent } from './landing/landing.component';
import {NavbarComponent} from './navbar.component'

const routes : Routes=[
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'register',
    component:AuthComponent
  },
  {
    path:'login',
    component:AuthComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'deposit',
    component:DepositComponent
  },
  {
    path:'withdraw',
    component:WithdrawComponent
  },
  {
    path:'creditcard',
    component:CreditcardComponent
  },
  {
    path:'fundtransfer',
    component:FundtransferComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    DepositComponent,
    WithdrawComponent,
    CreditcardComponent,
    FundtransferComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
