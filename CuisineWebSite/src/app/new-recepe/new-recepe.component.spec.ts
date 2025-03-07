import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecepeComponent } from './new-recepe.component';
import { ActivatedRoute } from '@angular/router';

describe('NewRecepeComponent', () => {
  let component: NewRecepeComponent;
  let fixture: ComponentFixture<NewRecepeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRecepeComponent],
      providers: [
              {
                provide: ActivatedRoute,
                useValue: {
                  snapshot: {
                    paramMap: {
                      get: (key: string) => null
                    }
                  }
                }
              }
            ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRecepeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
