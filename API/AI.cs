namespace API;

public class AI
{
    public static ChatResponse GetChatResponse(ChatRequest request){
        return new ChatResponse {
            Text = "Response text for terst",
            Emails = new List<TextValue> { 
                new TextValue() { Name ="Sosh" , Value = "sosh@gmail.com"},
                new TextValue() { Name ="Toly" , Value = "toly@gmail.com"},
            },
            Addresses = new List<TextValue> { 
                new TextValue() { Name ="חיעיד" , Value = "Shapira 68"},
                new TextValue() { Name ="םןקט" , Value = "Jerusalem, Sela"},
            },
            URLs = new List<TextValue> { 
                new TextValue() { Name ="Google" , Value = "http://google.com"},
                new TextValue() { Name ="Apple" , Value = "http://apple.com"},
            },
            PhoneNumbers = new List<TextValue> { 
                new TextValue() { Name ="Mirkaz hadshanut" , Value = "1800333444" },
                new TextValue() { Name ="Information" , Value = "1800555777" },
            },
        };
    }
}
