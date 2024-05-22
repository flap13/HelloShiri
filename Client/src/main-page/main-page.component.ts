import { Component } from '@angular/core';
import { ChatAskComponent } from '../chat-ask/chat-ask.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ChatAskComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
