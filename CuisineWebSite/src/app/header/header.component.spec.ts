import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HeaderComponent], // Import RouterTestingModule with routes and HeaderComponent
      providers: [Location] // Provide the Location service
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate'); // Spy on the navigate method
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should go to the home page when clicking on the logo', async () => {
    const logoLink = fixture.debugElement.query(By.css('.logolink')).nativeElement;
    logoLink.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should go back when clicking on the back button', () => {
    const backButton = fixture.debugElement.query(By.css('#icon-retour')).nativeElement;
    spyOn(component, 'goBack').and.callThrough();
    spyOn(window.history, 'back');
    backButton.click();
    fixture.detectChanges();
    expect(component.goBack).toHaveBeenCalled();
    expect(window.history.back).toHaveBeenCalled();
  });
});
