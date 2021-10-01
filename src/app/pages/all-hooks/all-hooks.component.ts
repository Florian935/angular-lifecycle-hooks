/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-all-hooks',
    templateUrl: './all-hooks.component.html',
    styleUrls: ['./all-hooks.component.scss'],
})
export class AllHooksComponent
    implements
        OnChanges,
        OnInit,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy
{
    firstCall = true;
    callOrder = 13;
    hooksLog: Array<string> = [];

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        this.hooksLog.push('Parent ~~ #OnChanges');
        console.log('Parent ~~ #OnChanges');
    }

    ngOnInit(): void {
        this.hooksLog.push('1. Parent ~~ #OnInit');
        console.log('Parent ~~ #OnInit');
    }

    ngDoCheck(): void {
        this.firstCall
            ? this.hooksLog.push('2. Parent ~~ #DoCheck')
            : this.hooksLog.push(`${this.callOrder++}. Parent ~~ #DoCheck`);
        this.firstCall = false;
        console.log('Parent ~~ #DoCheck');
    }

    ngAfterContentInit(): void {
        this.hooksLog.push('3. Parent ~~ #AfterContentInit');
        console.log('Parent ~~ #AfterContentInit');
    }

    ngAfterContentChecked(): void {
        this.firstCall
            ? this.hooksLog.push('4. Parent ~~ #AfterContentChecked')
            : this.hooksLog.push(
                  `${this.callOrder++}. Parent ~~ #AfterContentChecked`
              );
        console.log('Parent ~~ #AfterContentChecked');
    }

    ngAfterViewInit(): void {
        this.hooksLog.push('12. Parent ~~ #AfterViewInit');
        console.log('Parent ~~ #AfterViewInit');
    }

    ngAfterViewChecked(): void {
        this.hooksLog.push('13. Parent ~~ #AfterViewChecked');
        console.log('Parent ~~ #AfterViewChecked');
    }

    ngOnDestroy(): void {
        this.hooksLog.push('15. Parent ~~ #OnDestroy');
        console.log('Parent ~~ #OnDestroy');
    }
}
