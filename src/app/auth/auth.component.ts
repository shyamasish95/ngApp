import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import {UserFace} from '../models/user.model'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  currUser : UserFace;
  authType :string = '';
  title: string = '';
  isSubmitting: boolean = false;
  authForm : FormGroup;
  constructor(
    private _sharedService : SharedService,
    private router : Router,
    private route : ActivatedRoute,
    private fb : FormBuilder
  ) { 
    this.authForm = fb.group({
      'email':['',Validators.required],
      'password' :['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.route.url.subscribe(data =>
      {
        this.authType = data[data.length -1].path;
        this.title = (this.authType==='login')? 'Sign In':'Sign Up';
        if(this.authType==='register'){
          this.authForm.addControl('username',new FormControl());
        }
      });
  }
  submitForm(){
  this.isSubmitting = true;
  const credentials :UserFace= this.authForm.value;
  if(this.authType==='register'){
    localStorage.setItem(credentials.email,JSON.stringify(credentials));
  }else{
    this.currUser = JSON.parse(localStorage.getItem(credentials.email));
    this._sharedService.setLoggedInUser(this.currUser);
    if(this.currUser!= null){
      localStorage.setItem("isAuthenticated","true");
    }
  }
  this._sharedService.setItem(credentials.email);
  this.router.navigate(['./dashboard']);
  }
}
