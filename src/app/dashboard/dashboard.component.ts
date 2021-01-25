import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user = {};
  //public userName ='';
  constructor(private _sharedService : SharedService,
    private _router : Router
    ) {
    this.user= this._sharedService.getLoggedInUser();
    //this.userName = this.user.username;
   }
  
  ngOnInit(): void {
    
  }
  
  depositClick(){
    this._router.navigate(['./deposit']);
  }
  withdrawClick(){
    this._router.navigate(['./withdraw']);
  }
  creditCardClick(){
    this._router.navigate(['./creditcard']);
  }
  fundTransferClick(){
    this._router.navigate(['./fundtransfer']);
  }

}
