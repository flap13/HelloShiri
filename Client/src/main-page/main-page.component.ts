import { Component, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { ChatAskComponent } from '../chat-ask/chat-ask.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { DialogPageComponent } from '../dialog-page/dialog-page.component';
import { CommonModule } from '@angular/common';
import { ChatRequest } from './../app/app.model';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ChatAskComponent, HomePageComponent, CommonModule, DialogPageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements AfterViewInit {
 
  showHomePage: boolean = true;
  currentAsk:string="";
  requsest: ChatRequest = new ChatRequest();
 // @ViewChild('DialogPage') elementRef!: ElementRef; 
  @ViewChild('DialogPage') DialogPage?: DialogPageComponent;

  ngOnInit(): void {

    // this.chatRequest.Text = "מה מספר הטלפון בחירום?";


    // this.appService.GetChat(this.chatRequest).subscribe(response => {
    //   this.chatResponse = response;
    //   console.log(this.chatResponse);
    // });
  }

  /*public  getAnswer( ask:string="ffF"): void {
    this.showHomePage = !this.showHomePage;
    this.requsest = new ChatRequest();
    this.requsest.Text = ask;

    this.DialogPageComponent.addRequest( this.requsest);

  }*/
  addItem(newItem: string) {
  
    this.showHomePage = !this.showHomePage;
    this.requsest = new ChatRequest();
    this.requsest.Text = newItem;

    //alert(newItem);
  //this.DialogPageComponent.addRequest( );

   
   this.DialogPage?.addRequest(  this.requsest);//this.requsest
  }
  ngAfterViewInit(): void {
    
  }

}
