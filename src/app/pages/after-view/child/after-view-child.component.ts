import { AfterViewChecked, AfterViewInit, Component } from '@angular/core';

@Component({
    selector: 'app-after-view-child',
    templateUrl: './after-view-child.component.html',
    styleUrls: ['./after-view-child.component.scss'],
})
export class AfterViewChildComponent
    implements AfterViewInit, AfterViewChecked
{
    message = 'Hello from view child component !';

    constructor() {}

    ngAfterViewInit(): void {
        console.log('Child #AfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('Child #AfterViewChecked');
    }
}
