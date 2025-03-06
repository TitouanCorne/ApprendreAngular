import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MyRecepesComponent } from './my-recepes.component';

describe('MyRecepesComponent', () => {
  let component: MyRecepesComponent;
  let fixture: ComponentFixture<MyRecepesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyRecepesComponent],
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

    fixture = TestBed.createComponent(MyRecepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
