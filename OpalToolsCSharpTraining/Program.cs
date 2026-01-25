using OpalToolsCSharpTraining.Tools;
using Optimizely.Opal.Tools;

var builder = WebApplication.CreateBuilder(args);

// Add Opal Tools Service
builder.Services.AddOpalToolService();

// Register Opal Tools
builder.Services.AddOpalTool<GreeterTools>();
builder.Services.AddOpalTool<MathTools>();
builder.Services.AddOpalTool<AuthenticatedTools>();

// Register depenedencies
builder.Services.AddSingleton<IMathToolService, MathToolService>();

var app = builder.Build();

app.UseHttpsRedirection();
app.MapOpalTools();

app.Run();
