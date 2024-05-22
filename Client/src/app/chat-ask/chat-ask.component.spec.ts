import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAskComponent } from './chat-ask.component';

describe('ChatAskComponent', () => {
  let component: ChatAskComponent;
  let fixture: ComponentFixture<ChatAskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatAskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
