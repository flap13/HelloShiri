import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatRequest,TextValue,ChatResponse} from './app.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   // Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root',
})
export class AppService {

    chatResponse: ChatResponse[] = [];
    chatResponseUrl: string="http://localhost:5127/AskMe" ;//https://helloshiri.azurewebsites.net/askme";//";
    

  constructor(private http: HttpClient) { }


  GetChat( chatRequest:ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.chatResponseUrl, chatRequest, httpOptions);
    }

  _GetChat( chatRequest:ChatRequest): ChatResponse[] {
    return this.chatResponse ;
  }

}