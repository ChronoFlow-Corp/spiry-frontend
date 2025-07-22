import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsHistoryComponent } from './chats-history.component';

describe('ChatsHistoryComponent', () => {
  let component: ChatsHistoryComponent;
  let fixture: ComponentFixture<ChatsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatsHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
