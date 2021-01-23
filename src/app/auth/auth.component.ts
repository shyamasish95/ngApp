import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authType :string = '';
  title: string = '';
  isSubmitting: boolean = false;
  authForm : FormGroup;
  constructor(
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
  const credentials = this.authForm.value;
  if(this.authType==='register'){
    localStorage.setItem(credentials.email,credentials);
  }else{
    const curUser = JSON.parse(localStorage.getItem(credentials.email));
  }
  }
}
