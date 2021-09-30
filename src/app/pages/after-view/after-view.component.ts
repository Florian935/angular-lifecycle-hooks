import {
    AfterViewChecked,
    AfterViewInit,
    Component,
    OnInit,
    ViewChild,
} from '@angular/core';
import { AfterViewChildComponent } from './child/after-view-child.component';

@Component({
    selector: 'app-after-view',
    templateUrl: './after-view.component.html',
    styleUrls: ['./after-view.component.scss'],
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
    @ViewChild(AfterViewChildComponent) viewChild!: AfterViewChildComponent;

    constructor() {}

    ngAfterViewInit(): void {
        console.log('Parent #AfterViewInit');
        // console.log(this.viewChild);
    }

    ngAfterViewChecked(): void {
        console.log('Parent #AfterViewChecked');
        // console.log(this.viewChild);
    }
}
