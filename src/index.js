import readline from 'readline-sync';
import greetUser from './cli.js';

const MAX_ROUNDS = 3;

const runGame = (description, generateRound) => {
  const userName = greetUser();
  console.log(description);

  for (let round = 0; round < MAX_ROUNDS; round += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');

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
