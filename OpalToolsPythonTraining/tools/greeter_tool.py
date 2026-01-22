from opal_tools_sdk import tool
from pydantic import BaseModel
import random

class GreetingParameters(BaseModel):
    name: str

@tool("user-greeter", "Greets a user based on the provided name")
async def greeter(parameters: GreetingParameters):
    greetings = [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Welcome"
    ]
    chosen_greeting = random.choice(greetings)
    return f"{chosen_greeting}, {parameters.name}!"
