using System.Net.Http.Json;
using System.Text;
using System.Text.Json;

namespace API;

public class AI
{
    private static readonly HttpClient client = new HttpClient();
    public static ChatResponse GetChatResponse(ChatRequest request)
    {

        // Serialize the data object to a JSON string
        string json = JsonSerializer.Serialize(request);

        // Create an HttpContent object from the JSON string
        StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

        // Make the POST request
        HttpResponseMessage response = client.PostAsync("https://shiribackend.azurewebsites.net/askshiri", content).Result;

        // Ensure the request was successful
        response.EnsureSuccessStatusCode();

        string responseString = response.Content.ReadAsStringAsync().Result;
        ChatResponse chatResponse = new ChatResponse();
        try
        {
            JsonSerializerOptions options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };
            chatResponse = JsonSerializer.Deserialize<ChatResponse>(responseString, options) ?? new ChatResponse();
        }
        catch { }
        return chatResponse;

        // return new ChatResponse {
        //     Text = "Response text for terst",
        //     Emails = new List<TextValue> { 
        //         new TextValue() { Name ="Sosh" , Value = "sosh@gmail.com"},
        //         new TextValue() { Name ="Toly" , Value = "toly@gmail.com"},
        //     },
        //     Addresses = new List<TextValue> { 
        //         new TextValue() { Name ="חיעיד" , Value = "Shapira 68"},
        //         new TextValue() { Name ="םןקט" , Value = "Jerusalem, Sela"},
        //     },
        //     URLs = new List<TextValue> { 
        //         new TextValue() { Name ="Google" , Value = "http://google.com"},
        //         new TextValue() { Name ="Apple" , Value = "http://apple.com"},
        //     },
        //     PhoneNumbers = new List<TextValue> { 
        //         new TextValue() { Name ="Mirkaz hadshanut" , Value = "1800333444" },
        //         new TextValue() { Name ="Information" , Value = "1800555777" },
        //     },
        // };
    }
}
