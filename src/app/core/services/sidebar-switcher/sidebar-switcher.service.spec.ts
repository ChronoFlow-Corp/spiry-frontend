import { TestBed } from '@angular/core/testing';

import { SidebarSwitcherService } from './sidebar-switcher.service';

describe('SidebarSwitcherService', () => {
  let service: SidebarSwitcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarSwitcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
