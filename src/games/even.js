import runGame from '../index.js';
import getRandomNumber from '../utils/random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => runGame(description, generateRound);

export default playEvenGame;
