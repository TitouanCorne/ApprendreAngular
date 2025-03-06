import { ComponentFixture, TestBed } from '@angular/core/testing'; // Import necessary testing utilities from Angular
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import HttpClientTestingModule and HttpTestingController
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute for route parameter simulation
import { AllRecepesComponent } from './all-recepes.component'; // Import the component to be tested
import { RecepeService } from '../recepe.service'; // Import the service used by the component (adjust the path as needed)
import { Recepe } from '../recepe'; // Import the model used by the component (adjust the path as needed)
import { of } from 'rxjs'; // Import 'of' to create observable for route parameters

describe('AllRecepesComponent', () => { // Describe the test suite for AllRecepesComponent
  let component: AllRecepesComponent; // Declare a variable to hold the component instance
  let fixture: ComponentFixture<AllRecepesComponent>; // Declare a variable to hold the fixture (test environment) for the component
  let httpTestingController: HttpTestingController; // Declare a variable to hold the HttpTestingController

  beforeEach(async () => { // Before each test, set up the test environment
    await TestBed.configureTestingModule({ // Configure the testing module
      imports: [AllRecepesComponent, HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [ // Provide the necessary services
        RecepeService, // Provide the RecepeService
        {
          provide: ActivatedRoute, // Provide the ActivatedRoute service
          useValue: { // Mock the ActivatedRoute service
            snapshot: { // Mock snapshot parameters
              paramMap: {
                get: (key: string) => null // Mock the get method to return '1' for any key
              }
            }
          }
        }
      ]
    })
    .compileComponents(); // Compile the components

    httpTestingController = TestBed.inject(HttpTestingController); // Inject the HttpTestingController
    fixture = TestBed.createComponent(AllRecepesComponent); // Create the component instance
    component = fixture.componentInstance; // Get the component instance from the fixture
    fixture.detectChanges(); // Trigger change detection to update the component
  });

  afterEach(() => { // After each test, verify that there are no outstanding HTTP requests
    httpTestingController.verify();
  });

  it('should create', () => { // Define a test case
    expect(component).toBeTruthy(); // Check that the component instance is created successfully
  });
});
