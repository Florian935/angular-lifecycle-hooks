import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AfterViewRoutingModule } from './after-view-routing.module';
import { AfterViewComponent } from './after-view.component';
import { AfterViewChildComponent } from './child/after-view-child.component';

@NgModule({
    declarations: [AfterViewComponent, AfterViewChildComponent],
    imports: [CommonModule, AfterViewRoutingModule],
})
export class AfterViewModule {}
