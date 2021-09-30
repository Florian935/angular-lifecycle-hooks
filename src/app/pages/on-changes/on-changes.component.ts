import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer';

@Component({
    selector: 'app-on-changes',
    templateUrl: './on-changes.component.html',
    styleUrls: ['./on-changes.component.scss'],
})
export class OnChangesComponent {
    customer?: Customer;

    onClick(id: string | number, name: string): void {
        if (!(id && name)) {
            return;
        }

        this.customer = { id, name };
    }
}
