import runGame from '../index.js';
import getRandomNumber from '../utils/getRandomNumber.js';
import calculateExpression from '../utils/calculateExpression.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;
  const answer = calculateExpression(number1, number2, operator).toString();
  return [question, answer];
};

const playBrainCalc = () => runGame(description, generateRound);

export default playBrainCalc;
