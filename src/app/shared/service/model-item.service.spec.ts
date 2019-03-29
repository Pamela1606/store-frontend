import { TestBed } from '@angular/core/testing';

import { ModelItemService } from './model-item.service';

describe('ModelItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelItemService = TestBed.get(ModelItemService);
    expect(service).toBeTruthy();
  });
});
