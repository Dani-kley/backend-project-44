import readlineSync from 'readline-sync'

const MAX_ROUNDS = 3

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min


const isPrime = (num) => {
  if (num < 2) return false

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

export const runPrimeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let round = 0

  while (round < MAX_ROUNDS) {
    const number = getRandomInt(1, 100)

    console.log(`Question: ${number}`)

    const answer = readlineSync.question('Your answer: ').trim().toLowerCase()

    const correctAnswer = isPrime(number) ? 'yes' : 'no'

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      )
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
    round += 1
  }

  console.log(`Congratulations, ${name}!`)
}