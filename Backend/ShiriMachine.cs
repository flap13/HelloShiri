using Azure.AI.OpenAI;
using Azure;
using System.Text;
using System.Text.Json;

namespace Backend
{
    public class ShiriMachine
    {
        ChatCompletionsOptions chatCompletionsOptions;
        OpenAIClient client;

        public ShiriMachine()
        {
            client = new OpenAIClient(Config.endPoint, new AzureKeyCredential(Config.apiKey));

            StringBuilder sb = new StringBuilder();
            sb.Append("You are Shiri, an empathetic and kind AI assistant, fine-tuned specifically to support women dealing with domestic relations issues.");
            sb.Append("Your role is to provide compassionate, well-informed, and sensitive assistance based on indexed data. Remember to prioritize empathy, active listening, and clear, supportive communication in all interactions.");
            sb.Append("Key Attributes:Empathy and Kindness:Always respond with warmth and understanding.");
            sb.Append("Acknowledge the emotions and experiences of the person you are helping.");
            sb.Append("Supportive Guidance: Provide clear, practical advice based on reliable data.Offer resources, options, and next steps in a gentle and non-judgmental manner.");
            sb.Append("Confidentiality and Safety:Ensure the privacy and safety of the user are maintained.Provide information on how to seek help in a safe and confidential manner.");
            sb.Append("Analyzing Domestic Relations Queries:Your task is to analyze questions and answers related to domestic relations issues and provide a score between 1 to 10 indicating the possibility of domestic relations, where 1 represents the lowest likelihood and 10 represents the highest likelihood.");
            sb.Append("Format for Responses: All responses should be in format with the following structure:");
            sb.Append("{\"message\": \"Your empathetic and informative response here.\",\"phone_number\": \"If available, provide a phone number here.\",");
            sb.Append("\"email\": \"If available, provide an email address here.\",\"address\": \"If available, provide an address here.\",");
            sb.Append("\"domestic_relations_score\": \"Provide a score between 1 to 10.\", \"score_reasoning\": \"Provide a brief explanation for the score.\"}");

            chatCompletionsOptions = new ChatCompletionsOptions()
            {
                DeploymentName = Config.deploymentId,
                Messages =
                {
                    new ChatRequestSystemMessage(sb.ToString()),
                    //new ChatRequestUserMessage("מהי עמותת בת מלך?"),
                },
                MaxTokens = 2000,
                Temperature = 0.2F,
            };
        }

        public async Task<ChatResponse> GetChatResponse(ChatRequest chatRequest)
        {
            chatCompletionsOptions.Messages.Add(new ChatRequestUserMessage(chatRequest.Text));
            Response<ChatCompletions> response = client.GetChatCompletions(chatCompletionsOptions);

            //Response<ChatCompletions> response =  client.GetChatCompletionsAsync(chatCompletionsOptions).Result;

            ChatResponseMessage message = response.Value.Choices[0].Message;
            //Console.WriteLine($"{message.Role}: {message.Content}");

            ShiriAnswerJsonStructure? shiriAnswer = null;
            try
            {
                string messageText = message.Content;
                messageText = messageText.Replace("\n", "").Replace("'", "");
                shiriAnswer = JsonSerializer.Deserialize<ShiriAnswerJsonStructure>(messageText);
            }
            catch { }

            ChatResponse chatResponse = new ChatResponse();
            if (shiriAnswer != null)
            {
                chatResponse.Text = shiriAnswer.message;
                if (!string.IsNullOrEmpty(shiriAnswer.address))
                {
                    foreach (string address in shiriAnswer.address.Split(','))
                    {
                        chatResponse.Addresses.Add(new TextValue() { Value = address, Name = string.Empty });
                    }
                }
                if (!string.IsNullOrEmpty(shiriAnswer.email))
                {
                    foreach (string email in shiriAnswer.email.Split(','))
                    {
                        chatResponse.Emails.Add(new TextValue() { Value = email, Name = string.Empty });
                    }
                }
                if (!string.IsNullOrEmpty(shiriAnswer.phone_number))
                {
                    foreach (string phoneNumber in shiriAnswer.phone_number.Split(','))
                    {
                        chatResponse.PhoneNumbers.Add(new TextValue() { Value = phoneNumber, Name = string.Empty });
                    }
                }

                await CheckDomesticRelationScore(shiriAnswer);
            }
            else
            {
                // TODO: Deserialize/Parse answer manualy
                chatResponse.Text = "Something gouing wrong";
            }

            return chatResponse;
        }

        private async Task CheckDomesticRelationScore(ShiriAnswerJsonStructure shiriAnswer)
        {
            // TODO: call to external API when score is high
            await Task.CompletedTask;
        }
    }

}
