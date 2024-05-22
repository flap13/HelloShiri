using Azure.AI.OpenAI;
using Azure;
using Models;

namespace ShiriAI
{
    public class ShiriMachine : IShiriMachine
    {
        ChatCompletionsOptions chatCompletionsOptions;
        OpenAIClient client;

        public ShiriMachine()
        {
            client = new OpenAIClient(Config.endPoint, new AzureKeyCredential(Config.apiKey));

            ChatCompletionsOptions chatCompletionsOptions = new ChatCompletionsOptions()
            {
                DeploymentName = Config.deploymentId,
                Messages =
                {
                    new ChatRequestSystemMessage("You are a helpful assistant."),
                    new ChatRequestUserMessage("Does Azure OpenAI support customer managed keys?"),
                    new ChatRequestAssistantMessage("Yes, customer managed keys are supported by Azure OpenAI."),
                    new ChatRequestUserMessage("Do other Azure AI services support this too?"),
                },
                MaxTokens = 100,
                Temperature = 0.2F,
            };
        }

        public ChatResponse GetChatResponse(ChatRequest chatRequest)
        {
            Response<ChatCompletions> response = client.GetChatCompletions(chatCompletionsOptions);

            //Response<ChatCompletions> response =  client.GetChatCompletionsAsync(chatCompletionsOptions).Result;

            var message = response.Value.Choices[0].Message;
            //Console.WriteLine($"{message.Role}: {message.Content}");

            return new ChatResponse()
            {
                 Text = message.Content
            };
        }
    }

}
