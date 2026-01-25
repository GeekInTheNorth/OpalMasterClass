from opal_tools_sdk import tool, AuthData
from opal_tools_sdk.auth import requires_auth
from pydantic import BaseModel
from typing import Optional

# A parameters class with no properties
class AuthenticationTestParameters(BaseModel):
    pass

# A result class to structure our response
class AuthenticationTestResult(BaseModel):
    token: str

@requires_auth(provider="optiid", scope_bundle="cms", required=True)
@tool("authentication-test", "A tool to test authentication by echoing back the user identity.")
async def authenticationTest(parameters: AuthenticationTestParameters, auth_data: Optional[AuthData] = None):
    token = "unknown"
    if auth_data:
        token = auth_data["credentials"]["access_token"]

    return AuthenticationTestResult(token=token)
