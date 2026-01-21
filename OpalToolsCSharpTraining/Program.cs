using OpalToolsTraining;
using Optimizely.Opal.Tools;

var builder = WebApplication.CreateBuilder(args);

// Add Opal Tools Service
builder.Services.AddOpalToolService();

// Register Opal Tools
builder.Services.AddOpalTool<GreeterTools>();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapOpalTools();

app.Run();
