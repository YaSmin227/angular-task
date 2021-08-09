import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListrComponent } from './customer-listr.component';

describe('CustomerListrComponent', () => {
  let component: CustomerListrComponent;
  let fixture: ComponentFixture<CustomerListrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
