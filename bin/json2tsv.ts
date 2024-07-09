#!/usr/bin/env bun

import {json2tsv} from '../src/index.js';

const file = Bun.file(process.argv[2]);
const input = await file.json();
await Bun.write(Bun.stdout, json2tsv(input) + '\n');
