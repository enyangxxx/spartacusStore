import { TestBed } from '@angular/core/testing';

import { MyActiveCartService } from './my-active-cart.service';

describe('MyActiveCartService', () => {
  let service: MyActiveCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyActiveCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
