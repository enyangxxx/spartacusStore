import { TestBed } from '@angular/core/testing';

import { MySearchBoxComponentService } from './my-search-box-component.service';

describe('MySearchBoxComponentService', () => {
  let service: MySearchBoxComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySearchBoxComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
