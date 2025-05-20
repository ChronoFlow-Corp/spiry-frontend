import {TestBed} from '@angular/core/testing';

import {SidebarMobileStore} from './sidebar-mobile.store';

describe('SidebarMobileStore', () => {
  let service: SidebarMobileStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarMobileStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
