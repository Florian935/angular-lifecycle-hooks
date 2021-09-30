import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';

@Component({
    selector: 'app-on-changes-child',
    templateUrl: './on-changes-child.component.html',
    styleUrls: ['./on-changes-child.component.scss'],
})
export class OnChangesChildComponent implements OnChanges {
    @Input() customer?: Customer;
    changeLog: Array<string> = [];

    ngOnChanges(changes: SimpleChanges): void {
        console.log('OnChanges');
        console.log(JSON.stringify(changes));

        for (const propName in changes) {
            const change = changes[propName];
            const to = JSON.stringify(change.currentValue);
            const from = JSON.stringify(change.previousValue);
            const changeLog = `${propName}: changed from ${from} to ${to} `;
            this.changeLog.push(changeLog);
        }
    }
}
