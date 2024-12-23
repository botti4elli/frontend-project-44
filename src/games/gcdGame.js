import runGame from '../index.js';
import getRandomNumber from '../utils/random.js';
import calculateGCD from '../utils/calculateGreatestCommonDivisor.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculateGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};

const playGcdGame = () => runGame(description, generateRound);

export default playGcdGame;
