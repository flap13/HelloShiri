import { model} from '@angular/core';

export class TextValue {
    Name: string="";
    Value: string="";
     constructor(){}
}

export class ChatResponse
{
    text:string="";
    phoneNumbers: TextValue[]=[];
    Emails: TextValue[]=[];
    URLs: TextValue[]=[];
    Addresses: TextValue[]=[];
    constructor(){}  

    
}    

export class ChatRequest
{
    text:string="";
    AdditionalData: TextValue[]=[];
    constructor(){}
}

export class ChatObject{
    req:ChatRequest = new ChatRequest;
    res:ChatResponse = new ChatResponse

}

 