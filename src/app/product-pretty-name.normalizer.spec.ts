import { TestBed } from '@angular/core/testing';

import { ProductPrettyNameNormalizer } from './product-pretty-name.normalizer';

describe('ProductPrettyNameNormalizer', () => {
  let service: ProductPrettyNameNormalizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPrettyNameNormalizer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
