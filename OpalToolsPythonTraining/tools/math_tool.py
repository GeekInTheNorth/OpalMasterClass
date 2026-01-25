from opal_tools_sdk import tool
from pydantic import BaseModel

class AdvancedMultiplierParameters(BaseModel):
    valueOne: float
    valueTwo: float
    numberOfPlaces: int

class AdvancedMultiplierResult(BaseModel):
    result: float

@tool("advanced-multiplier", "Multiplies two decimal numbers with specified precision.")
async def advancedMultiplier(parameters: AdvancedMultiplierParameters) -> AdvancedMultiplierResult:
    result = parameters.valueOne * parameters.valueTwo
    return AdvancedMultiplierResult(result=round(result, parameters.numberOfPlaces))
