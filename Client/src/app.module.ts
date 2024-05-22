import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatAskComponent } from './chat-ask/chat-ask.component';
<<<<<<< HEAD:Client/src/app/app.module.ts
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppService } from './app.service';
=======
import { AddItemComponent } from './add-item/add-item.component';
import {ItemListComponent} from './item-list/item-list.component';
>>>>>>> f237b90b80ad3d282793aed59914fc2b4b947ea8:Client/src/app.module.ts

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
<<<<<<< HEAD:Client/src/app/app.module.ts
    HttpClientModule,
    HttpClient,
    AppService
=======
    AddItemComponent,
    ItemListComponent
>>>>>>> f237b90b80ad3d282793aed59914fc2b4b947ea8:Client/src/app.module.ts
  ],
  providers: [AppService,HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }