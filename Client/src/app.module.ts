import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatAskComponent } from './chat-ask/chat-ask.component';
import { AddItemComponent } from './add-item/add-item.component';
import {ItemListComponent} from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChatAskComponent
  ],
  imports: [
    BrowserModule,
    MainPageComponent,
    ChatAskComponent,
    AddItemComponent,
    ItemListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }