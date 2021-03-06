import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'on-changes',
        loadChildren: () =>
            import('./pages/on-changes/on-changes.module').then(
                (m) => m.OnChangesModule
            ),
    },
    {
        path: 'lifecycle-order',
        loadChildren: () =>
            import('./pages/lifecycle-order/lifecycle-order.module').then(
                (m) => m.LifecycleOrderModule
            ),
    },
    {
        path: 'after-content',
        loadChildren: () =>
            import('./pages/after-content/after-content.module').then(
                (m) => m.AfterContentModule
            ),
    },
    {
        path: 'after-view',
        loadChildren: () =>
            import('./pages/after-view/after-view.module').then(
                (m) => m.AfterViewModule
            ),
    },
    {
        path: 'all-hooks',
        loadChildren: () =>
            import('./pages/all-hooks/all-hooks.module').then(
                (m) => m.AllHooksModule
            ),
    },
    {
        path: '',
        redirectTo: 'on-changes',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'on-changes',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
