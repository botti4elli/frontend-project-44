#!/usr/bin/env node

import runGame from '../src/index.js';
import { generateRound, gameDescription } from '../src/games/brain-prime.js';

runGame(gameDescription, generateRound);
