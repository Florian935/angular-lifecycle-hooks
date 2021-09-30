import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnChangesRoutingModule } from './on-changes-routing.module';
import { OnChangesComponent } from './on-changes.component';
import { OnChangesChildComponent } from './on-changes-child/on-changes-child.component';

@NgModule({
    declarations: [OnChangesComponent, OnChangesChildComponent],
    imports: [CommonModule, OnChangesRoutingModule],
})
export class OnChangesModule {}
