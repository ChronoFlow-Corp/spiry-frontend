import {TestBed} from '@angular/core/testing';

import {SidebarMobileService} from './sidebar-mobile.service';

describe('SidebarMobileStore', () => {
  let service: SidebarMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
