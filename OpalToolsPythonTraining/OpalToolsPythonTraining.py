from opal_tools_sdk import ToolsService
from fastapi import FastAPI
import uvicorn

app = FastAPI(
    title="Opal Tools API",
    description="Python Web API for Opal Tools Training",
    version="1.0.0"
)

tools_service = ToolsService(app)

# Import tools AFTER initializing ToolsService
from tools import greeter_tool

# Routes
@app.get("/")
async def root():
    return {"message": "Welcome to Opal Tools API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
