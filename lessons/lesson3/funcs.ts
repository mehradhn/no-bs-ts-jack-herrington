export function printToFile(str: string, callback: () => void): void {
  console.log(str);
  callback();
}

// export function arrayMutate(
//   numbers: number[],
//   mutate: (v: number) => number
// ): number[] {
//   return numbers.map(mutate);
// }

// if you want to write clean code you do like interface and define type for func
export type TypeOfmutationFn = (v: number) => number;
export function arrayMutate(
  numbers: number[],
  mutate: TypeOfmutationFn
): number[] {
  return numbers.map(mutate);
}
// console.log(arrayMutate([1, 2, 3, 4, 5], (v: number) => v * 10));

const newFn: TypeOfmutationFn = (v: number) => v * 100;

console.log(newFn(6));

function createAddOne(num: number) {
  return (val: number) => num + val;
}

const adder = createAddOne(55);

console.log(adder(45));
