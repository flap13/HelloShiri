import { Component ,Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from '../app/app.service';
 import { ChatRequest, ChatResponse,ChatObject, TextValue } from '../app/app.model';
import { MainPageComponent } from '../main-page/main-page.component';
import { CommonModule } from '@angular/common';  

declare var webkitSpeechRecognition:any;

@Component({
  selector: 'app-dialog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-page.component.html',
  styleUrl: './dialog-page.component.css'
})
export class DialogPageComponent {
  ChatList: ChatObject[] = [];
  
  constructor(private appService: AppService) { }
  
  chatRequest: ChatRequest = new ChatRequest();
  chatResponse: ChatResponse = new ChatResponse();
  results: any;
  speachToText: string = "";
  showRecord: boolean = true;
 
  
  ngOnInit(): void {

    this.ChatList =[];
    
   

   
    // Hardcoded initialization of the array with one ChatObject
    // this.arrayChat = [
    //   {
    //     req: {
    //       Text: 'Sample Request Text',
    //       PhoneNumbers: [{ number: '1234567890', label: 'Home' }],
    //       Emails: [{ address: 'example@example.com', label: 'Work' }],
    //       URLs: [{ url: 'http://example.com', label: 'Website' }],
    //       Addresses: [{ address: '123 Main St', label: 'Home' }]
    //     },
    //     res: {
    //       Text: 'Sample Response Text',
    //       AdditionalData: [{ data: 'Additional Data 1' }, { data: 'Additional Data 2' }]
    //     }
    //   }
    // ];
  }

  public addRequest( requsest: ChatRequest){
    //this.chatRequest.text = "מה הטלפון?";
    
    this.chatResponse=new ChatResponse();
    this.ChatList.push(
      { req: requsest, res: this.chatResponse })
    ;
    
    this.appService.GetChat(requsest).subscribe(response => {
      this.chatResponse = response;
      
      this.ChatList[ this.ChatList.length-1].res= this.chatResponse;
      
     
      console.log(this.chatResponse);
    });
  }
}


