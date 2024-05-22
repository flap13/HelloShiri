using Backend;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

var allowOrigins = "_allowOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowOrigins,
                      builder =>
                      {
                          builder
                          .AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors(allowOrigins);

app.MapPost("/AskShiri", ([FromBody]ChatRequest request) =>
{
    ShiriMachine  shiriMachine = new ShiriMachine();
    ChatResponse response = shiriMachine.GetChatResponse(request).Result;
    return response;
})
.WithName("AskShiri")
.WithOpenApi();

// TODO: Realize chunk response for better performance/user expirience

app.MapGet("/Hello", () => new { Message = "Hello World" })
.WithName("Hello")
.WithOpenApi();

app.Run();
