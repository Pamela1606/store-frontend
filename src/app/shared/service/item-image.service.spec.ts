import { TestBed } from '@angular/core/testing';

import { ItemImageService } from './item-image.service';

describe('ItemImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemImageService = TestBed.get(ItemImageService);
    expect(service).toBeTruthy();
  });
});
