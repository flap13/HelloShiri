import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';


declare var webkitSpeechRecognition:any;
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-chat-ask',
  standalone: true,
  templateUrl: './chat-ask.component.html',
  styleUrl: './chat-ask.component.css'
})
export class ChatAskComponent {

  title = 'Client';
  // chatRequest: ChatRequest = new ChatRequest();
  // chatResponse: ChatResponse = new ChatResponse(); 
  results:any;
  speachToText:string="";
  buttonText:string="הקלט";
  

}
