import getRandomNumber from '../utils/random.js';
import isPrime from '../utils/isPrime.js';

export const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { gameDescription };
