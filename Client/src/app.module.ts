import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatAskComponent } from './chat-ask/chat-ask.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppService } from './app/app.service';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent } from './item-list/item-list.component';

import { CommonModule } from '@angular/common';

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
    ItemListComponent,
    CommonModule

  ],
  providers: [AppService, HttpClientModule, HttpClient,CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }