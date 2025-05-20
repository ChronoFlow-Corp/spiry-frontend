import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SidebarMobileHeaderComponent} from './sidebar-mobile-header.component';

describe('HeaderComponent', () => {
  let component: SidebarMobileHeaderComponent;
  let fixture: ComponentFixture<SidebarMobileHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMobileHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMobileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
