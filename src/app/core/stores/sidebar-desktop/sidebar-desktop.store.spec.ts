import {TestBed} from '@angular/core/testing';

import {SidebarDesktopStore} from './sidebar-desktop.store';

describe('SidebarDesktopService', () => {
  let service: SidebarDesktopStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarDesktopStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
