import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MobileViewComponent} from './mobile-view.component';

describe('MobileViewComponent', () => {
  let component: MobileViewComponent;
  let fixture: ComponentFixture<MobileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
