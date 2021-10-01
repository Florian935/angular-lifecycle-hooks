import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllHooksComponent } from './all-hooks.component';

const routes: Routes = [{ path: '', component: AllHooksComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AllHooksRoutingModule {}
