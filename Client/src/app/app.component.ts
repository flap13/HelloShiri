import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { AppService } from './app.service';
import { ChatRequest, ChatResponse, TextValue } from './app.model';

declare var webkitSpeechRecognition:any;
=======
import { MainPageComponent } from '../main-page/main-page.component';

>>>>>>> f237b90b80ad3d282793aed59914fc2b4b947ea8

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Client';
  chatRequest: ChatRequest = new ChatRequest();
  chatResponse: ChatResponse = new ChatResponse(); 
  results:any;
  speachToText:string="";
  buttonText:string="הקלט";
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.chatRequest.Text = "מה מספר הטלפון בחירום?";

    this.appService.GetChat(this.chatRequest).subscribe(response => {
      this.chatResponse = response;
      console.log(this.chatResponse);
    });
  }

  startListening() {
    // let voiceHandler = this.hiddenSearchHandler?.nativeElement;
    this.buttonText="הפסק להקליט";
    if ('webkitSpeechRecognition' in window) {
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false;
      vSearch.interimresults = false;
      vSearch.lang = 'he'//'en-US';
      vSearch.start();
      vSearch.onresult = (e:any) => {
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
    this.speachToText=this.results;
    this.buttonText="הקלט";
  }

}
