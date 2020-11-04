import { TestBed } from '@angular/core/testing';

import { ProductCategoryNormalizer } from './product-category.normalizer';

describe('ProductCategoryNormalizer', () => {
  let service: ProductCategoryNormalizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCategoryNormalizer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
