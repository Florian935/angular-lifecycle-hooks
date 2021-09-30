import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesChildComponent } from './on-changes-child.component';

describe('OnChangesChildComponent', () => {
  let component: OnChangesChildComponent;
  let fixture: ComponentFixture<OnChangesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnChangesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
