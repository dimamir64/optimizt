#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { program } from 'commander';

import optimizt from './index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJson = JSON.parse(await fs.readFile(path.join(__dirname, 'package.json')));

program
  .option('--avif', 'create AVIF and exit')
  .option('--webp', 'create WebP and exit')
  .option('--force', 'force create AVIF and WebP')
  .option('-l, --lossless', 'perform lossless optimizations (WebP and AVIF only)')
  .option('-v, --verbose', 'be verbose')
  .option('-o, --output <path>', 'write output to directory');

program
  .usage('[options] <dir> <file ...>')
  .version(packageJson.version, '-V, --version')
  .description(packageJson.description)
  .parse(process.argv);

if (!program.args.length) {
  program.help();
} else {
  optimizt({
    paths: program.args,
    ...program.opts(),
  });
}

process.on('unhandledRejection', error => {
  console.error(error);
});
