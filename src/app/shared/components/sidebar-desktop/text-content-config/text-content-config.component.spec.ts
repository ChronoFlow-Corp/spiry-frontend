import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextContentConfigComponent} from './text-content-config.component';

describe('TextContentConfigComponent', () => {
  let component: TextContentConfigComponent;
  let fixture: ComponentFixture<TextContentConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextContentConfigComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextContentConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
