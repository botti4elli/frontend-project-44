import getRandomNumber from '../utils/random.js';
import generateProgressionArray from '../utils/generateProgressionArray.js';

const generateProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);

  const progression = generateProgressionArray(start, step, progressionLength);

  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

export default generateProgression;
