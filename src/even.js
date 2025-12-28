import readlineSync from 'readline-sync'

const getRandomNumber = () => Math.floor(Math.random() * 100)
const isEven = (num) => num % 2 === 0
const MAX_ROUNDS = 3

export const runEvenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctCount = 0

  while (correctCount < MAX_ROUNDS) {
    const number = getRandomNumber()
    console.log(`Question: ${number}`)

    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return;
    }

    if (answer === correctAnswer) {
      console.log('Correct!')
      correctCount += 1
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return

    }
  }

  console.log(`Congratulations, ${name}!`)
};