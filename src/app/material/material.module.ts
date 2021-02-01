import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatSnackBarModule} from '@angular/material/snack-bar'
const MaterialModuleValues =[
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    MaterialModuleValues
  ],
  exports:[MaterialModuleValues]
})
export class MaterialModule { }
