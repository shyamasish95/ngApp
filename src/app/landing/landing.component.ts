import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  allProducts : Product[];
  constructor(private _router: Router,
    private _sharedService : SharedService,
    private _productService:ProductService
    ) { }

  ngOnInit(): void {
  }
  loginClick(){
    this._router.navigate(['./login'])
  }
  LogProductsOnConsole(){
    this._productService.GetAllProducts().subscribe(product =>{this.allProducts=product} );
    console.log(this.allProducts);
  }
}
