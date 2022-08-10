import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAreaComponent } from './plan-area.component';

describe('PlanAreaComponent', () => {
  let component: PlanAreaComponent;
  let fixture: ComponentFixture<PlanAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
