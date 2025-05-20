import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarMobileMenuComponent} from './sidebar-mobile-menu.component';

describe('MenuComponent', () => {
  let component: SidebarMobileMenuComponent;
  let fixture: ComponentFixture<SidebarMobileMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMobileMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMobileMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
