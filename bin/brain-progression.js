#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { runProgressionGame } from '../src/progression.js';
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
runProgressionGame(name);