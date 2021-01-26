import { Injectable } from '@angular/core';
import { UserFace } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data = '';
  private loggedInUser : UserFace;
  constructor() { }
  setItem(value){
    this.data=value;
  }
  setLoggedInUser(value){
    this.loggedInUser = value;
  }
  getItem(){
    return this.data;
  }
  getLoggedInUser(): UserFace{
    return this.loggedInUser;
  }
  logOffLocalStorageForLoggedInUser(){
    localStorage.setItem('isAuthenticated','false');
  }
}
