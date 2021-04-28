import { svg64 } from 'svg64';
import { readFileSync } from 'fs';

export function svgToString(src) {
	const svg = readFileSync(src, 'utf-8');
	const string = svg64(svg);

	return string;
}
