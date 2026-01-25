import { AuthData } from "@optimizely-opal/opal-tools-sdk";

interface AuthenticationTestParameters {
    email: String;
}

async function authenticationTest(parameters: AuthenticationTestParameters, authData?: AuthData) {
    const { email } = parameters;

    let token = '';
    if (authData)
    {
        token = authData.credentials.access_token
    }

    return {
        token: token
    };
}

export default authenticationTest;