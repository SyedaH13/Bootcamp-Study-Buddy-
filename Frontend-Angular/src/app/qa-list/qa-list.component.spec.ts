import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAListComponent } from './qa-list.component';

describe('QAListComponent', () => {
  let component: QAListComponent;
  let fixture: ComponentFixture<QAListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QAListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
