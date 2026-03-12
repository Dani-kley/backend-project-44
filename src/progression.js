import readlineSync from 'readline-sync';

const MAX_ROUNDS = 3;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }

  return result;
};

export const runProgressionGame = (name) => {
  console.log('What number is missing in the progression?');

  let round = 0;

  while (round < MAX_ROUNDS) {
    const length = getRandomInt(5, 10);
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 10);

    const progression = generateProgression(start, step, length);

    const hiddenIndex = getRandomInt(0, progression.length - 1);

    const correctAnswer = progression[hiddenIndex];

    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);

    const answer = readlineSync.question('Your answer: ').trim();

    if (answer !== String(correctAnswer)) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    round += 1;
  }

  console.log(`Congratulations, ${name}!`);
};