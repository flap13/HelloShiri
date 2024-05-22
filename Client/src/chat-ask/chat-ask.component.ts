import { Component } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { VoiceRecognitionService } from '../../src/app/voice-recognition.service';



@Component({
  selector: 'app-chat-ask',
  standalone: true,
  imports: [MainPageComponent, MainPageComponent, CommonModule],
  templateUrl: './chat-ask.component.html',
  styleUrl: './chat-ask.component.css'
})
export class ChatAskComponent {

  
  // chatRequest: ChatRequest = new ChatRequest();
  // chatResponse: ChatResponse = new ChatResponse(); 
  results: any;



  public isUserSpeaking: boolean = false;
  tryText: string = "";
  public isCanceling: boolean = false;
  constructor(private voiceRecognition: VoiceRecognitionService) { }


  /*declare var webkitSpeechRecognition:any; 
   speachToText:string="";
   buttonText:string="הקלט";
  showRecord: boolean = true; 
  startListening() {
    // let voiceHandler = this.hiddenSearchHandler?.nativeElement;
    if (this.showRecord) { this.showRecord = false; }
    else { this.showRecord = true; }
   
    if ('webkitSpeechRecognition' in window) {
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false;
      vSearch.interimresults = false;
      vSearch.lang = 'he'//'en-US';
      vSearch.start();
      vSearch.onresult = (e: any) => {
        console.log(e);
        // voiceHandler.value = e?.results[0][0]?.transcript;
        this.results = e.results[0][0].transcript;
       
        this.getResult();
        // console.log(this.results);
        vSearch.stop();
      };
    } else {
      alert('Your browser does not support voice recognition!');
    }
  }

  getResult() {
    // console.log(this.results);
    alert(this.results);
    this.speachToText = this.results;

  }*/

  ngOnInit(): void {
    this.initVoiceInput();
  }
  stopRecording() {
    this.isCanceling = false;
    this.voiceRecognition.stop();
    this.isUserSpeaking = false;
  }

  initVoiceInput() {
    // Subscription for initializing and this will call when user stopped speaking.
    this.voiceRecognition.init().subscribe(() => {
      // User has stopped recording
      // Do whatever when mic finished listening
      if (this.isCanceling) { this.tryText = ""; }
    });

    // Subscription to detect user input from voice to text.
    this.voiceRecognition.speechInput().subscribe((input) => {
      // Set voice text output to
      this.tryText = input;
    });
  }

  startRecording() {
    this.isCanceling = false;
    this.isUserSpeaking = true;
    this.voiceRecognition.start();
    this.tryText = "";
  }

  cancelRecording() {
    this.tryText = "";
    this.isCanceling = true;
    this.voiceRecognition.stop();
    this.isUserSpeaking = false;
  }

}
