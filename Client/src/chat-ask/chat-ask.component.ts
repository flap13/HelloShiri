import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-chat-ask',
  standalone: true,
  imports: [FloatLabelModule],
  templateUrl: './chat-ask.component.html',
  styleUrl: './chat-ask.component.css'
})
export class ChatAskComponent {

}
