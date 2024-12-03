import { runGame } from '../index.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

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
