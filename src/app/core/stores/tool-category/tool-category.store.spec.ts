import {TestBed} from '@angular/core/testing';

import {ToolCategoryStore} from './tool-category.store';

describe('ToolCategoryStore', () => {
  let service: ToolCategoryStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolCategoryStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
