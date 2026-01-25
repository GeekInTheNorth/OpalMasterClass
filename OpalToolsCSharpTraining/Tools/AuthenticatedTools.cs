using System.ComponentModel;
using Optimizely.Opal.Tools;

namespace OpalToolsCSharpTraining.Tools;

public class AuthenticatedTools
{
    [OpalTool("authentication_test")]
    [OpalAuthorization("optiid", "cms", true)]
    [Description("A tool to test authentication by echoing back the user identity.")]
    public async Task<object> AuthenticationTest(AuthenticationTestParameters _, OpalToolContext context)
    {
        return await Task.FromResult(new { Echo = context?.AuthorizationData?.Provider });
    }
}

public class AuthenticationTestParameters
{
}