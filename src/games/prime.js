import getRandomNumber from '../utils/getRandomNumber.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export { gameDescription };
