import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAManagementComponent } from './qa-management.component';

describe('QAManagementComponent', () => {
  let component: QAManagementComponent;
  let fixture: ComponentFixture<QAManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QAManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QAManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
