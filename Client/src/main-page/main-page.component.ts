import { Component } from '@angular/core';
import { ChatAskComponent } from '../chat-ask/chat-ask.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { DialogPageComponent } from '../dialog-page/dialog-page.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ChatAskComponent,HomePageComponent,CommonModule,DialogPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  showHomePage:boolean=true;
  
  ngOnInit(): void {

    // this.chatRequest.Text = "מה מספר הטלפון בחירום?";

 
    // this.appService.GetChat(this.chatRequest).subscribe(response => {
    //   this.chatResponse = response;
    //   console.log(this.chatResponse);
    // });
  }

  getAnswer():void{
    this.showHomePage=!this.showHomePage
  }
}
