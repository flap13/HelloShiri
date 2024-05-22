using Azure.AI.OpenAI;
using Azure;

namespace ShiriAI
{
    public class ShiriMachine
    {
        // Azure OpenAI setup
        Uri endPoint = new Uri("https://itc-openai.openai.azure.com/"); // Add your endpoint here
        string apiKey = "328092f46c0e4d88b4d5a20014328922"; // Add your OpenAI API key here
        string deploymentId = "gpt-4"; // Add your deployment ID here

        // Azure AI Search setup
        string searchEndpoint = "https://itc-search.search.windows.net"; // Add your Azure AI Search endpoint here
        string searchKey = "dT6JxohGGYbrb00YcmDMr6BFUMl3wLwmtGUaFdmsTrAzSeCB3och"; // Add your Azure AI Search admin key here
        string searchIndexName = "ai-idx1"; // Add your Azure AI Search index name here
//         OpenAIClient client = new OpenAIClient(endPoint, new AzureKeyCredential(apiKey));

//         ChatCompletionsOptions chatCompletionsOptions = new ChatCompletionsOptions()
//         {
//             Messages =
//     {
//         new ChatMessage(ChatRole.System, "What are the differences between Azure Machine Learning and Azure AI services?")
//     },
//             // The addition of AzureChatExtensionsOptions enables the use of Azure OpenAI capabilities that add to
//             // the behavior of Chat Completions, here the "using your own data" feature to supplement the context
//             // with information from an Azure AI Search resource with documents that have been indexed.
//             AzureExtensionsOptions = new AzureChatExtensionsOptions()
//             {
//                 Extensions =
//         {
//             new AzureCognitiveSearchChatExtensionConfiguration()
//             {
//                 SearchEndpoint = new Uri(searchEndpoint),
//                 IndexName = searchIndexName,
//                 SearchKey = new AzureKeyCredential(searchKey!),
//                 QueryType = new AzureChatExtensionType(azure_search),
//                 Parameters = FromString([object Object]),
//             },
//         },
//             },
//             DeploymentName = gpt - 4,
//             MaxTokens = 800,
//             StopSequences = null,
//             Temperature = 0.22,


//         };

//         var response = await client.GetChatCompletionsAsync(
//             deploymentId,
//             chatCompletionsOptions);

//         var message = response.Value.Choices[0].Message;
//         // The final, data-informed response still appears in the ChatMessages as usual
//         Console.WriteLine($"{message.Role}: {message.Content}");
// // Responses that used extensions will also have Context information
// // to explain extension activity and provide supplemental information like citations.
// Console.WriteLine($"Citations and other information:");
// foreach (var contextMessage in message.AzureExtensionsContext.Messages)
// {
//     // Note: citations and other extension payloads from the "tool" role are often encoded JSON documents
//     // and need to be parsed as such; that step is omitted here for brevity.
//     Console.WriteLine($"{contextMessage.Role}: {contextMessage.Content}");
// }


    }





    //     private static string uri = "https://itc-openai.openai.azure.com/";
    //     private static string APIKEY = "328092f46c0e4d88b4d5a20014328922";
    //     private static string deploymentName = "gpt-4";

    //     private static ChatCompletionsOptions options = new ChatCompletionsOptions()
    //     {
    //         DeploymentName = deploymentName,
    //         Messages = { },
    //         Temperature = (float)0.7,
    //         MaxTokens = 800,
    //         NucleusSamplingFactor = (float)0.95,
    //         FrequencyPenalty = 0,
    //         PresencePenalty = 0
    //     };

    //     private static OpenAIClient client = new OpenAIClient(
    //                         new Uri(uri),
    //                         new AzureKeyCredential(APIKEY));

    //     public static string GetChatResponse(string line)
    //     {
    //         options.Messages.Add(new ChatRequestUserMessage(line));
    //         Task<Response<ChatCompletions>> task = Task.Run<Response<ChatCompletions>>(async () => await GetNonStreamingChatResponse());
    //         var response = task.Result;
    //         ChatCompletions completions = response.Value;
    //         string fullresponse = completions.Choices[0].Message.Content;
    //         options.Messages.Add(new ChatRequestUserMessage(fullresponse));
    //         return fullresponse;
    //     }

    //     public static async Task<Response<ChatCompletions>> GetNonStreamingChatResponse()
    //     {
    //         Response<ChatCompletions> response =
    //                    await client.GetChatCompletionsAsync(options);
    //         return response;
    //     }

    //     // public static async Task StreamingChatResponse(string line)
    //     // {
    //     //     options.Messages.Add(new ChatRequestUserMessage(line));
    //     //     while (true)
    //     //     {
    //     //         Console.Write("Chat Prompt:");
    //     //         line = Console.ReadLine()!;
    //     //         if (line.Equals("quit", StringComparison.OrdinalIgnoreCase))
    //     //         {
    //     //             break;
    //     //         }
    //     //         options.Messages.Add(new ChatRequestUserMessage(line));

    //     //         Console.WriteLine("Response:");
    //     //         Response<StreamingChatCompletions> response =
    //     //              await client.GetChatCompletionsStreamingAsync(
    //     //             deploymentOrModelName: deployment,
    //     //             options);

    //     //         using StreamingChatCompletions streamingChatCompletions = response.Value;
    //     //         string fullresponse = "";
    //     //         await foreach (StreamingChatChoice choice in streamingChatCompletions.GetChoicesStreaming())
    //     //         {
    //     //             await foreach (ChatMessage message in choice.GetMessageStreaming())
    //     //             {
    //     //                 fullresponse += message.Content;
    //     //                 Console.Write(message.Content);
    //     //             }
    //     //             Console.WriteLine();
    //     //         }
    //     //         options.Messages.Add(new ChatMessage(ChatRole.Assistant, fullresponse));

    //     //     }
    //     // }

    //     // public static async Task<StreamingResponse<StreamingChatCompletionsUpdate>> GetStreamingChatResponse()
    //     // {
    //     //    var response =await client.GetChatCompletionsStreamingAsync(options);
    //     //     return response;
    //     // }
    // }
}
