import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ViewComponent } from './delete/view.component';
import { UpdateComponent } from './update/update.component';
import { CreatComponent } from './create/creat.component';
import { ReadComponent } from './read/read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViewComponent,
    UpdateComponent,
    CreatComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
