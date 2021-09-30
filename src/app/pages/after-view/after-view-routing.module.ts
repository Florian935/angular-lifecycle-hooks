import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterViewComponent } from './after-view.component';

const routes: Routes = [{ path: '', component: AfterViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AfterViewRoutingModule {}
