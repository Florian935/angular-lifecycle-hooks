import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleOrderRoutingModule } from './lifecycle-order-routing.module';
import { LifecycleOrderComponent } from './lifecycle-order.component';


@NgModule({
  declarations: [
    LifecycleOrderComponent
  ],
  imports: [
    CommonModule,
    LifecycleOrderRoutingModule
  ]
})
export class LifecycleOrderModule { }
