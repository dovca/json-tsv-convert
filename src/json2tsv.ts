import {pipe, flatten, entries, map, join} from '@dovca/toolbox';

const SPECIAL_CHARS_REGEX = /[\t\n"]/;

function sanitizeValue(value: any): any {
	return value === ''
		? '""'
		: typeof value === 'string' && SPECIAL_CHARS_REGEX.test(value)
			? `"${value.toString().replace(/"/g, '""')}"`
			: value;
}

export const json2tsv = pipe(
	flatten(),
	entries,
	map(([key, value]: [string, any]) => [key, sanitizeValue(value)]),
	map(join('\t')),
	join('\n'),
);
