import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepeCardComponent } from './recepe-card.component';

describe('RecepeCardComponent', () => {
  let component: RecepeCardComponent;
  let fixture: ComponentFixture<RecepeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
