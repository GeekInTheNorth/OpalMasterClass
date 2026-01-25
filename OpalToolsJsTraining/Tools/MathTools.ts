interface MathParameters {
    valueOne: number;
    valueTwo: number;
    numberOfPlaces: number;
}

async function advancedMultiplication(parameters: MathParameters) {
    const { valueOne, valueTwo, numberOfPlaces } = parameters;

    const product = valueOne * valueTwo;
    const result = Number(product.toFixed(numberOfPlaces));

    return {
        result: result
    }
}

export default advancedMultiplication