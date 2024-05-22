namespace Backend;

public class ChatRequest
{
    public string Text { get; set; } = string.Empty;
    public List<TextValue> AdditionalData { get; set; } = [];
}
