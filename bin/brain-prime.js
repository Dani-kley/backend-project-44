#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runPrimeGame } from '../src/prime.js';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
runPrimeGame(name);