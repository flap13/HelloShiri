import { Component } from '@angular/core';
import { ChatAskComponent } from '../chat-ask/chat-ask.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ChatAskComponent,CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
