using API;
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

app.MapPost("/AskMe", ([FromBody]ChatRequest request) =>
{
    ChatResponse response = AI.GetChatResponse(request);
    return response;
})
.WithName("AskMe")
.WithOpenApi();

app.MapGet("/Hello", () => new { Message = "Hello World" })
.WithName("Hello")
.WithOpenApi();

app.Run();
