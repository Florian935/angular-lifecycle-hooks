import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllHooksRoutingModule } from './all-hooks-routing.module';
import { AllHooksComponent } from './all-hooks.component';
import { AllHooksChildComponent } from './child/all-hooks-child.component';


@NgModule({
  declarations: [
    AllHooksComponent,
    AllHooksChildComponent
  ],
  imports: [
    CommonModule,
    AllHooksRoutingModule
  ]
})
export class AllHooksModule { }
