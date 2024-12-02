import readline from 'readline-sync';
import { greetUser } from '../cli.js';

const isEven = (num) => num % 2 === 0;

const playBrainEven = () => {
    const userName = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const maxCorrectAnswers = 3;
    let correctAnswers = 0;

    while (correctAnswers < maxCorrectAnswers) {
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(`Question: ${number}`);

        const userAnswer = readline.question('Your answer: ').toLowerCase();
        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswers+=1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

export default playBrainEven;
