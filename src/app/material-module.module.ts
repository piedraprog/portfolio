import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


// CORE UI ANGULAR 
import { CarouselModule } from '@coreui/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    CarouselModule
  ], 
  exports:[
    MatTableModule,
    CarouselModule
  ]
})
export class AngularMaterialModule { }
