import express from 'express';
import { ParameterType, ToolsService, tool, requiresAuth } from '@optimizely-opal/opal-tools-sdk';
import greeting from './Tools/GreetingTools';
import advancedMultiplication from './Tools/MathTools'
import authenticationTest from './Tools/AuthenticatedTools';

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// SET UP TOOLS

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

tool({
  name: 'advanced-multiplier',
  description: 'Multiplies two decimal numbers with specified precision.',
  parameters: [
    {
      name: 'valueOne',
      type: ParameterType.Number,
      description: 'The initial number to be multiplied.',
      required: true
    },
    {
      name: 'valueTwo',
      type: ParameterType.Number,
      description: 'The number to multiply by.',
      required: true
    },
    {
      name: 'numberOfPlaces',
      type: ParameterType.Number,
      description: 'The number of decimal places to round the result to.',
      required: true
    }
  ]
})(advancedMultiplication);

requiresAuth({ provider: 'optiid', scopeBundle: 'cms', required: true })
tool({
  name: 'authentication-test',
  description: 'A tool to test authentication by echoing back the user identity.',
  parameters: []
})(authenticationTest);


// END TOOLS SETUP

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
