import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private data = '';
  constructor() { }
  setItem(value){
    this.data=value;
  }
  getItem(){
    return this.data;
  }
}
