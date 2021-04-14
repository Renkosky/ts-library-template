export function tsAdd(...numbers: number[]) {
  return numbers.reduce((prev, next) => prev + next, 0)
}
