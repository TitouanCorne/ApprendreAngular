import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRecepesComponent } from './all-recepes.component';

describe('AllRecepesComponent', () => {
  let component: AllRecepesComponent;
  let fixture: ComponentFixture<AllRecepesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRecepesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRecepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
