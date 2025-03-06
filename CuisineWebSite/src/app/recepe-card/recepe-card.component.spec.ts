import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepeCardComponent } from './recepe-card.component';
import { of } from 'rxjs';
import { Recepe } from '../recepe';

describe('RecepeCardComponent', () => {
  let component: RecepeCardComponent;
  let fixture: ComponentFixture<RecepeCardComponent>;
  let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepeCardComponent],
      providers: [
        {provide: Router, useValue : routerSpy},
        { provide: ActivatedRoute, useValue: {
          snapshot: {
            paramMap: {
              get: (key: string) => null
            },
          },
        }}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepeCardComponent);
    component = fixture.componentInstance;
    component.recepecard = {
      id: 1,
      image: '/assets/img/sangria.jpg',
      name: 'Test Recepe',
      owner: 'Test Owner',
      type: 'Main Course',
      cookingTime: '30 min',
      preparationTime: '15 min',
      ingredient: ['Ingredient 1', 'Ingredient 2'],
      remark: 'Test Remark',
      steps: ['Step 1', 'Step 2']
    } as Recepe; // Provide a complete test recepe
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
