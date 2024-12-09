import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecepesComponent } from './my-recepes.component';

describe('MyRecepesComponent', () => {
  let component: MyRecepesComponent;
  let fixture: ComponentFixture<MyRecepesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecepesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRecepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
