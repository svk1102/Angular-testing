import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiComponent } from './api.component';
import { ApiServiceService } from '../service/api-service.service';
import { of } from 'rxjs';

describe('ApiComponent', () => {
  let component: ApiComponent;
  let fixture: ComponentFixture<ApiComponent>;
  let mockService: jasmine.SpyObj<ApiServiceService>;

  beforeEach(() => {
    mockService = jasmine.createSpyObj('ApiServiceService', ['getJoke'])
    TestBed.configureTestingModule({
      declarations: [ApiComponent],
      providers: [{ provide: ApiServiceService, useValue: mockService }]
    });
    fixture = TestBed.createComponent(ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data on initialization', () => {
    // Mocking the response from the DataService
    mockService.getJoke.and.returnValue(of([{ punchline: "test punchline", setup: "test" }]));

    // Triggering the ngOnInit lifecycle hook
    component.ngOnInit();

    // Expecting that the component's data property is updated with the mocked data
    expect(component.punchline).toEqual('test punchline');
    expect(component.setup).toEqual('test');
  });


});
