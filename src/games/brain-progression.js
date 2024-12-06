// import readlineSync from 'readline-sync';
import getRandomNumber from '../utils/random.js';

const generateProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + i * step);
  }

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};
export default generateProgression;
