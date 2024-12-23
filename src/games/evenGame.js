import runGame from '../index.js';
import getRandomNumber from '../utils/random.js';
import isEven from '../utils/isEven.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const playEvenGame = () => runGame(description, generateRound);

export default playEvenGame;
