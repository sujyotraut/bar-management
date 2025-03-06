export function match(value: string): boolean {
	const date = new Date(value);
	return !isNaN(date.getTime());
}
