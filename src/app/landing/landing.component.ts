import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _router: Router,
    private _sharedService : SharedService
    ) { }

  ngOnInit(): void {
  }
  loginClick(){
    this._router.navigate(['./login'])
  }
}
