import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesComponent } from './on-changes.component';

const routes: Routes = [{ path: '', component: OnChangesComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OnChangesRoutingModule {}
