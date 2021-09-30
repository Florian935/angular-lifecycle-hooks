import {
    AfterContentChecked,
    AfterContentInit,
    Component,
} from '@angular/core';

@Component({
    selector: 'app-after-content',
    templateUrl: './after-content.component.html',
    styleUrls: ['./after-content.component.scss'],
})
export class AfterContentComponent
    implements AfterContentInit, AfterContentChecked
{
    constructor() {}

    ngAfterContentInit(): void {
        console.log('Parent AfterContentInit');
    }

    ngAfterContentChecked(): void {
        console.log('Parent AfterContentChecked');
    }
}
