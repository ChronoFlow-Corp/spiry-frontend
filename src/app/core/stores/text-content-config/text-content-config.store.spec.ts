import {TestBed} from '@angular/core/testing';

import {TextContentConfigService} from './text-content-config.store';

describe('TextContentConfigService', () => {
  let service: TextContentConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextContentConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
