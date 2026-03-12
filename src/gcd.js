import readlineSync from 'readline-sync'

const MAX_ROUNDS = 3

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1))

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b]
  }
  return a
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomInt(1, 100)
  const num2 = getRandomInt(1, 100)
  return {
    question: `${num1} ${num2}`,
    correctAnswer: gcd(num1, num2),
  }
}

export const runGcdGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.')

  let round = 0
  while (round < MAX_ROUNDS) {
    const { question, correctAnswer } = getQuestionAndAnswer()
    console.log(`Question: ${question}`)

    const answer = readlineSync.question('Your answer: ').trim()

    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
    round += 1
  }

  console.log(`Congratulations, ${name}!`)
}
