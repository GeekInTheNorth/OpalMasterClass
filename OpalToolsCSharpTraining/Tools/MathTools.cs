using System.ComponentModel;
using Optimizely.Opal.Tools;

namespace OpalToolsCSharpTraining.Tools;

public class MathTools(IMathToolService advancedToolService)
{
    [OpalTool("advanced_multiplier")]
    [Description("Multiplies two decimal numbers with specified precision.")]
    public async Task<object> Multiply(MathToolParameters parameters)
    {
        var result = advancedToolService.Multiply(parameters.ValueOne, parameters.ValueTwo, parameters.NumberOfPlaces);
        
        return await Task.FromResult(new { Result = result });
    }
}

public class MathToolParameters
{
    [Description("The initial number to be multiplied.")]
    public decimal ValueOne { get; set; }

    [Description("The number to multiply by.")]
    public decimal ValueTwo { get; set; }

    [Description("The number of decimal places to round the result to.")]
    public int NumberOfPlaces { get; set; }
}

public interface IMathToolService
{
    decimal Multiply(decimal valueOne, decimal valueTwo, int numberOfPlaces);
}

public class MathToolService : IMathToolService
{
    public decimal Multiply(decimal a, decimal b, int numberOfPlaces) => Math.Round(a * b, numberOfPlaces);
}