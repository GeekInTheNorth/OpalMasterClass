import express from 'express';
import { ParameterType, ToolsService, tool } from '@optimizely-opal/opal-tools-sdk';
import greeting from './GreetingTool';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

const toolsService = new ToolsService(app);

tool({
    name: 'user-greeter',
    description: 'Greets a person by name',
    parameters: [
        {
            name: 'name',
            type: ParameterType.String,
            description: 'The name of the person to greet.',
            required: true
        }
    ]
})(greeting);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT signal received: closing HTTP server");
  server.close(() => {
    console.log("HTTP server closed");
    process.exit(0);
  });
});
