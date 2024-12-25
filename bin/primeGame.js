#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateRound, gameDescription } from '../src/games/prime.js';

runGame(gameDescription, generateRound);
