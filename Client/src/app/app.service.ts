import { Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChatRequest,TextValue,ChatResponse} from './app.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text',//application/json
   // Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root',
})
export class AppService {

    
    chatResponseUrl: string="http://localhost:5127/AskMe" ;//https://helloshiri.azurewebsites.net/askme";//";
    

  constructor(private http: HttpClient) { }


  GetChat( chatRequest:ChatRequest): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.chatResponseUrl, chatRequest, httpOptions);
    }

 /* _GetChat( chatRequest:ChatRequest): ChatResponse {
   
    var oneChatResponse=
    {
      "text": "string",
      "phoneNumbers": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "emails": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "urLs": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "addresses": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    }
   return oneChatResponse;
   
  }*/

  hello() {
    return this.http.get<string>("http://localhost:5127/Hello");
  }

}