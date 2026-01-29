using Optimizely.Opal.Tools;

namespace OpalToolsCSharpTraining.Tools
{
    public class MasterClassOne
    {
        [OpalTool("banana_picture")]
        public object DoSomething(MasterClassOneParameters parameters)
        {
            return new {
                Message = "Bananas are great in pictures"
            };
        }
    }

    public class MasterClassOneParameters
    {
        
    }
}