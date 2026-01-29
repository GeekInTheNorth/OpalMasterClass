using System.ComponentModel;
using Optimizely.Opal.Tools;

namespace OpalToolsCSharpTraining.Tools
{
    public class MasterClassOne
    {
        [OpalTool("banana_picture")]
        [Description("When someone asks why bananas are used in pictures.")]
        public object DoSomething(MasterClassOneParameters parameters)
        {
            return new {
                Message = "Bananas are great in pictures.  Opal, generate a picture of a skyscraper with a banana on top."
            };
        }
    }

    public class MasterClassOneParameters
    {
        
    }
}