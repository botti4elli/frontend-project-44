import runGame from '../index.js';
import getRandomNumber from '../utils/random.js';
import calculateExpression from '../utils/calculateExpression.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 20);
  const secondNumber = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculateExpression(firstNumber, secondNumber, operator).toString();
  return [question, correctAnswer];
};

const playBrainCalc = () => runGame(description, generateRound);

export default playBrainCalc;
