namespace Models;

public class ChatResponse
{
    public string Text { get; set; } = string.Empty;
    public List<TextValue> PhoneNumbers { get; set; } = [];
    public List<TextValue> Emails { get; set; } = [];
    public List<TextValue> URLs { get; set; } = [];
    public List<TextValue> Addresses { get; set; } = [];
}
