import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleOrderComponent } from './lifecycle-order.component';

const routes: Routes = [{ path: '', component: LifecycleOrderComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LifecycleOrderRoutingModule {}
