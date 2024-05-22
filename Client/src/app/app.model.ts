import { model} from '@angular/core';

export class TextValue {
    Name: string="";
    Value: string="";
     constructor(){}
}

export class ChatResponse
{
    Text:string="";
    PhoneNumbers: TextValue[]=[];
    Emails: TextValue[]=[];
    URLs: TextValue[]=[];
    Addresses: TextValue[]=[];
    constructor(){}  
}    

export class ChatRequest
{
    Text:string="";
    AdditionalData: TextValue[]=[];
    constructor(){}
}

 