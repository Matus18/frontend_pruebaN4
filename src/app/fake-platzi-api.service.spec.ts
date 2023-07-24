import { TestBed } from '@angular/core/testing';

import { FakePlatziApiService } from './fake-platzi-api.service';

describe('FakePlatziApiService', () => {
  let service: FakePlatziApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakePlatziApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
