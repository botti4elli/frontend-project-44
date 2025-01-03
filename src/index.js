import readlineSync from 'readline-sync';
import getUserName from './cli.js';

const roundsCount = 3;

const runGame = (description, generateRound) => {
  const userName = getUserName();
  console.log(description);

  for (let round = 0; round < roundsCount; round += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
