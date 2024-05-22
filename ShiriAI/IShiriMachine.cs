using Models;

namespace ShiriAI;

public interface IShiriMachine
{
    ChatResponse GetChatResponse(ChatRequest chatRequest);
}
