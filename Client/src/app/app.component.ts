import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { ChatRequest, ChatResponse, TextValue } from './app.model';
import { MainPageComponent } from '../main-page/main-page.component';

declare var webkitSpeechRecognition:any;





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
  showRecord:boolean=true;
  hello:string = "";
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.chatRequest.Text = "מה מספר הטלפון בחירום?";

    // this.appService.GetChat(this.chatRequest).subscribe(response => {
    //   this.chatResponse = response;
    //   console.log(this.chatResponse);
    // });

    this.appService.hello().subscribe(data => this.hello = data);
  }

  startListening() {
    // let voiceHandler = this.hiddenSearchHandler?.nativeElement;
    if (this.showRecord)
      {this.showRecord=false;}
    else {this.showRecord=true;}
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
   
  }

}
