import runGame from '../index.js';
import getRandomNumber from '../utils/random.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (firstNumber, secondNumber) => {
  let largerNumber = firstNumber;
  let smallerNumber = secondNumber;
  while (smallerNumber !== 0) {
    const remainder = largerNumber % smallerNumber;
    largerNumber = smallerNumber;
    smallerNumber = remainder;
  }
  return largerNumber;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculateGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};

const playGcdGame = () => runGame(description, generateRound);

export default playGcdGame;
