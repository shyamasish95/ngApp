import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import {UserFace} from '../models/user.model'
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private fb : FormBuilder,
    private snackBar: MatSnackBar
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

  addUser(credentials) {
    // temp logic
    localStorage.setItem(credentials.email,JSON.stringify(credentials));
  }

  validateUser({email}) {
    // temp
    let currentUser = localStorage.getItem(email);
    return currentUser ?  JSON.parse(localStorage.getItem(email)) : false;
  }

  submitForm(){ 
    // start validating user
    this.isSubmitting = true;
    const credentials: UserFace = this.authForm.value;

    if( this.authType==='register' ) { //new user register
      // add a user to db
      this.addUser(credentials);
    } else { // existing user login
      let currentUser = this.validateUser(credentials);
      if(currentUser) { // user found
        this._sharedService.setLoggedInUser(currentUser);
        localStorage.setItem("isAuthenticated","true");
        this._sharedService.setItem(credentials.email);
        this.router.navigate(['./dashboard']);
      } else { // user not found
        this.snackBar.open(`Sorry ${credentials.email}, you don't have a account`, null, { duration: 5000 })
        // logic to clear the form here
        this.isSubmitting = false;
      }
    } 
  }
}
