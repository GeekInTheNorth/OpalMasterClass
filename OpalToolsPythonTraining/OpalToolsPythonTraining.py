from opal_tools_sdk import ToolsService, tool
from opal_tools_sdk import requires_auth
from pydantic import BaseModel
from fastapi import FastAPI
import uvicorn
import random

app = FastAPI(
    title="Opal Tools API",
    description="Python Web API for Opal Tools Training",
    version="1.0.0"
)

tools_service = ToolsService(app)

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

# Routes
@app.get("/")
async def root():
    return {"message": "Welcome to Opal Tools API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
