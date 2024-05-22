import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChatAskComponent } from './chat-ask/chat-ask.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppService } from './app/app.service';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemListComponent} from './item-list/item-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';  

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
    CommonModule,
    HttpClientModule,
    HttpClient,
    AppService,
    AddItemComponent,  
    ItemListComponent,
    InputTextModule,
    FloatLabelModule
  ],
  providers: [AppService,HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }