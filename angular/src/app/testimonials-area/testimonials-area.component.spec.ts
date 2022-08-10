import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsAreaComponent } from './testimonials-area.component';

describe('TestimonialsAreaComponent', () => {
  let component: TestimonialsAreaComponent;
  let fixture: ComponentFixture<TestimonialsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
