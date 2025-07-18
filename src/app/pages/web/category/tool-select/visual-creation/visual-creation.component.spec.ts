import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VisualCreationComponent} from './visual-creation.component';

describe('VisualCreationComponent', () => {
  let component: VisualCreationComponent;
  let fixture: ComponentFixture<VisualCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualCreationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VisualCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
