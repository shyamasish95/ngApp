import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data = '';
  private loggedInUser;
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
  getLoggedInUser(){
    return this.loggedInUser;
  }
  logOffLocalStorageForLoggedInUser(){
    localStorage.setItem('isAuthenticated','false');
  }
}
