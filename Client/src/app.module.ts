import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatAskComponent } from './chat-ask/chat-ask.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { AppService } from './app/app.service';
import { AddItemComponent } from './add-item/add-item.component';
import {ItemListComponent} from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChatAskComponent,
    AppService,
    CommonModule
  ],
  imports: [
    BrowserModule,
    MainPageComponent,
    ChatAskComponent,
    HttpClientModule,
    HttpClient,
    AppService,
    AddItemComponent,
    ItemListComponent
  ],
  providers: [AppService, HttpClientModule, HttpClient,CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }