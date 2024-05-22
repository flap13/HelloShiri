import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatRequest,TextValue,ChatResponse} from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {

    chatResponse: ChatResponse[] = [];   
  constructor() { }


  //getChat( chatRequest:ChatRequest): Observable<ChatResponse[]> {
    //return this.chatResponse ;
  //}

  getChat( chatRequest:ChatRequest): ChatResponse[] {
    return this.chatResponse ;
  }

}