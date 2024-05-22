import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAnsComponent } from './chat-ans.component';

describe('ChatAnsComponent', () => {
  let component: ChatAnsComponent;
  let fixture: ComponentFixture<ChatAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatAnsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
