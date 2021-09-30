import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleOrderComponent } from './lifecycle-order.component';

describe('LifecycleOrderComponent', () => {
  let component: LifecycleOrderComponent;
  let fixture: ComponentFixture<LifecycleOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
