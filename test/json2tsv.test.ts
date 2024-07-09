import {expect, test} from 'bun:test';
import {json2tsv, tsv2json} from '../src/index.js';

import inputJson from './fixtures/input.json';

const inputTsv = (await Bun.file('test/fixtures/input.tsv').text()).trim();

test('JSON to TSV to JSON', () => {
	expect(tsv2json(json2tsv(inputJson))).toEqual(inputJson);
});

test('TSV to JSON to TSV', () => {
	expect(json2tsv(tsv2json((inputTsv)))).toEqual(inputTsv);
});
