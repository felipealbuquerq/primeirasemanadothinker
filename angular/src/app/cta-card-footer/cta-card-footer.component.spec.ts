import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaCardFooterComponent } from './cta-card-footer.component';

describe('CtaCardFooterComponent', () => {
  let component: CtaCardFooterComponent;
  let fixture: ComponentFixture<CtaCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaCardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
