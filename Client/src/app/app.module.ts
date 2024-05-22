import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatAskComponent } from './chat-ask/chat-ask.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChatAskComponent,
    AppService
  ],
  imports: [
    BrowserModule,
    MainPageComponent,
    ChatAskComponent,
    HttpClientModule,
    HttpClient,
    AppService
  ],
  providers: [AppService,HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }