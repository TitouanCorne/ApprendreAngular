import { TestBed } from '@angular/core/testing';
import { RecepeService } from './recepe.service';
import { Recepe } from './recepe';

describe('RecepeService', () => {
  let service: RecepeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecepeService] // Provide the RecepeService
    });
    service = TestBed.inject(RecepeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Check that the service is created successfully
  });

  it('should load recepes from API', async () => {
    const testRecepes: Recepe[] = [ // Create a test array of Recepe objects
      { id: 1, image: 'image1', name: 'name1', owner: 'owner1', type: 'type1', cookingTime: 'cookingTime1', preparationTime: 'preparationTime1', ingredient: ['ingredient1'], remark: 'remark1', steps: ['step1'], favorite: [false, false, false, false, false] },
      { id: 2, image: 'image2', name: 'name2', owner: 'owner2', type: 'type2', cookingTime: 'cookingTime2', preparationTime: 'preparationTime2', ingredient: ['ingredient2'], remark: 'remark2', steps: ['step2'], favorite: [false, false, false, false, false] }
    ];

    spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response(JSON.stringify(testRecepes))));

    const recepes = await service.getAllRecepes(); // Call the getAllRecepes method
    expect(recepes.length).toBe(2); // Check that the length of the recepes array is 2
    expect(recepes).toEqual(testRecepes); // Check that the recepes array matches the test data
  });

  it('should load a recepe by id from API', async () => {
    const testRecepe: Recepe = { id: 1, image: 'image1', name: 'name1', owner: 'owner1', type: 'type1', cookingTime: 'cookingTime1', preparationTime: 'preparationTime1', ingredient: ['ingredient1'], remark: 'remark1', steps: ['step1'], favorite: [false, false, false, false, false] };

    spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response(JSON.stringify(testRecepe))));

    const recepe = await service.getRecepeById(1); // Call the getRecepeById method
    expect(recepe).toEqual(testRecepe); // Check that the recepe returned is the same as the testRecepe
  });
});