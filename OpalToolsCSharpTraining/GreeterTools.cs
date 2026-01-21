using System.ComponentModel;
using Optimizely.Opal.Tools;

namespace OpalToolsTraining;

public class GreeterTools
{
    [OpalTool("user_greeter")]
    [Description("A description to give Opal context of how and when to use this tool.")]
    [OpalAuthorization("provider", "scope", false)]
    public async Task<object> UserGreeter(GreetingParameters parameters)
    {
        var greetingTemplates = new[]
        {
            "Hello, {0}!",
            "Hi there, {0}!",
            "Greetings, {0}!",
            "Hey, {0}! Welcome aboard!",
            "Good day, {0}!"
        };
        var random = new Random();
        var template = greetingTemplates[random.Next(greetingTemplates.Length)];
        var greeting = string.Format(template, parameters.Name);

        return await Task.FromResult(new { Message = greeting });
    }
}

public class GreetingParameters
{
    [Description("A description to give Opal context to about this parameter.")]
    public string Name { get; set; } = string.Empty;
}