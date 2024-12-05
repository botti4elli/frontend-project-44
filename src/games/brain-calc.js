import runGame from '../index.js';
import getRandomNumber from '../utils/random.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
    const num1 = getRandomNumber(1, 20);
    const num2 = getRandomNumber(1, 20);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];

    const question = `${num1} ${operator} ${num2}`;
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = (num1 + num2).toString();
            break;
        case '-':
            correctAnswer = (num1 - num2).toString();
            break;
        case '*':
            correctAnswer = (num1 * num2).toString();
            break;
    }

    return [question, correctAnswer];
};

const playBrainCalc = () => runGame(description, generateRound);

export default playBrainCalc;
