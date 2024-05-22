using Azure.AI.OpenAI;
using Azure;

namespace ShiriAI
{
    public static class ShiriMachine
    {
        static OpenAIClient client = new OpenAIClient(Config.endPoint, new AzureKeyCredential(Config.apiKey));
        static ChatCompletionsOptions chatCompletionsOptions = new ChatCompletionsOptions()
        {
            DeploymentName = Config.deploymentId,
            Messages =
            {
                new ChatRequestSystemMessage("You are a helpful assistant."),
                new ChatRequestUserMessage("Does Azure OpenAI support customer managed keys?"),
                new ChatRequestAssistantMessage("Yes, customer managed keys are supported by Azure OpenAI."),
                new ChatRequestUserMessage("Do other Azure AI services support this too?"),
            },
            MaxTokens = 100
        };

        static Response<ChatCompletions> response = client.GetChatCompletions(chatCompletionsOptions);
    }
}
