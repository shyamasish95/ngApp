import {Component, OnInit} from '@angular/core'
import { Router } from '@angular/router';
import { SharedService } from './shared.service';
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
    constructor(
        private _sharedService: SharedService,
        private _router: Router
    ){

    }
    ngOnInit():void{

    }
    logoutClick(){
        this._sharedService.logOffLocalStorageForLoggedInUser();
        this._router.navigate(['./login']);
    }
}