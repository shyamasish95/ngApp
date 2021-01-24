import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  public user;
  depositForm: FormGroup;
  isSubmitting : boolean;
  constructor(
    private _router : Router,
    private _sharedService: SharedService,
    private _fb :FormBuilder
  ) { 
    this.user = _sharedService.getItem();
    // if(this.user===''){
    //   _router.navigate(['./login']);
    // }
    this.depositForm = _fb.group(
      {
        'Deposit Amount':['',Validators.required],
        'Select Tenure':['', Validators.required],
        'Rate Of Interest':['7']
      }
    )
  }

  ngOnInit(): void {
  }
  submitForm(){

  }
}
