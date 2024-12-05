import runGame from '../index.js';
import getRandomNumber from '../utils/random.js';

const description = 'Find the greatest common divisor of given numbers.';


const calculateGCD = (a, b) => {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
};

const generateRound = () => {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);

    const question = `${num1} ${num2}`;
    const correctAnswer = calculateGCD(num1, num2).toString();

    return [question, correctAnswer];
};

const playBrainGCD = () => runGame(description, generateRound);

export default playBrainGCD;
