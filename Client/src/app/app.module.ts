import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatAskComponent } from './chat-ask/chat-ask.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChatAskComponent
  ],
  imports: [
    BrowserModule,
    MainPageComponent,
    ChatAskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }