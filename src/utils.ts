/**
 * Shuffles a given array
 */
 export function shuffleArray<T>(arr: T[]) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

/**
 * Creates an array with all numbers from defined start to inclusive end.
 */
export function createNumbersArray(start: number, end: number) {
  return [...Array(end - start + 1).keys()].map((a) => a + start);
}
