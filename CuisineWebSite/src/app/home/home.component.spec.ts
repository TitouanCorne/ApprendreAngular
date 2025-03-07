import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
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

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the user', async () => {
    component.currentUser  = {
      id: 10,
      username: "default",
      image: "default",
      current: true
    }; //default value to initialize
    await userService.updateCurrentUser("2");
    fixture.detectChanges();
    expect(component.currentUser).toBeDefined();
    if (component.currentUser !== undefined) {
      await expectAsync(userService.getUsername(component.currentUser)).toBeResolvedTo("Titouan");
    }
  }); 
});
