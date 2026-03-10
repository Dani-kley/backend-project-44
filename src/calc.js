import readlineSync from 'readline-sync';

const operations = ['+', '-', '*'];
const MAX_ROUNDS = 3;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operation = operations[getRandomInt(0, operations.length - 1)];

  let correctAnswer;
  switch (operation) {
    case '+': correctAnswer = num1 + num2; break;
    case '-': correctAnswer = num1 - num2; break;
    case '*': correctAnswer = num1 * num2; break;
  }

  return { question: `${num1} ${operation} ${num2}`, correctAnswer };
};

export const runCalcGame = (name) => {
  console.log('What is the result of the expression?');

  let round = 0;
  while (round < MAX_ROUNDS) {
    const { question, correctAnswer } = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ').trim();

    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    round += 1;
  }

  console.log(`Congratulations, ${name}!`);
};