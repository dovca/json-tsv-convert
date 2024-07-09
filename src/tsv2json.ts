import {
	pipe,
	map,
	split,
	unquote,
	replace,
	deepen,
	fromPairs,
	flow,
	isNumeric,
	toNumber,
	filter,
	isTruthy,
	trim,
} from '@dovca/toolbox';

function sanitizeValue(value: string) {
	return value === '""'
		? ''
		: isNumeric(value)
			? toNumber(value)
			: flow(
				value,
				unquote,
				replace(/""/g, '"'),
			);
}

export const tsv2json = pipe(
	trim,
	split('\n'),
	filter(isTruthy),
	map(split('\t')),
	map(([key, value]) => [key, sanitizeValue(value)] as [string, string]),
	fromPairs,
	deepen('.'),
);
