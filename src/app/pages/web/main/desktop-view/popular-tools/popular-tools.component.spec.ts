import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PopularToolsComponent} from './popular-tools.component';

describe('PopularToolsComponent', () => {
  let component: PopularToolsComponent;
  let fixture: ComponentFixture<PopularToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularToolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopularToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
