import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AfterContentRoutingModule } from './after-content-routing.module';
import { AfterContentComponent } from './after-content.component';
import { AfterContentChildComponent } from './child/after-content-child/after-content-child.component';
import { ContentChildDecoratorComponent } from './content-child-decorator/content-child-decorator.component';

@NgModule({
    declarations: [AfterContentComponent, AfterContentChildComponent, ContentChildDecoratorComponent],
    imports: [CommonModule, AfterContentRoutingModule],
})
export class AfterContentModule {}
