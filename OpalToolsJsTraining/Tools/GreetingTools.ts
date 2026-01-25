interface GreetingParameters {
    name: String;
}

async function greeting(parameters: GreetingParameters) {
    const { name } = parameters;

    // generate a random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    
    // then do a switch statement of five greetings that incorporate the name
    let greeting: string;
    
    switch (randomNumber) {
        case 1:
            greeting = `Hello, ${name}! How are you today?`;
            break;
        case 2:
            greeting = `Hi there, ${name}! Welcome!`;
            break;
        case 3:
            greeting = `Greetings, ${name}! Nice to see you!`;
            break;
        case 4:
            greeting = `Hey ${name}! Hope you're having a great day!`;
            break;
        case 5:
            greeting = `Good day, ${name}! Pleasure to meet you!`;
            break;
        default:
            greeting = `Hello, ${name}!`;
    }

    return {
        greeting
    };
}

export default greeting;