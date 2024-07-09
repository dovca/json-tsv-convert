#!/usr/bin/env bun

import {tsv2json} from '../src/index.js';

const file = Bun.file(process.argv[2]);
const input = await file.text();
await Bun.write(Bun.stdout, JSON.stringify(tsv2json(input)) + '\n');
