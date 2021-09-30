import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterContentComponent } from './after-content.component';

const routes: Routes = [{ path: '', component: AfterContentComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AfterContentRoutingModule {}
