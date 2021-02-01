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
import {NavbarComponent} from './navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { ActivateGuard } from './activate.guard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule,HttpClient} from '@angular/common/http';
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
    component:DashboardComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'deposit',
    component:DepositComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'withdraw',
    component:WithdrawComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'creditcard',
    component:CreditcardComponent,
    canActivate:[ActivateGuard]
  },
  {
    path:'fundtransfer',
    component:FundtransferComponent,
    canActivate:[ActivateGuard]
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
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
