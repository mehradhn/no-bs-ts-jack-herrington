type ThreeDcoordinate = [x: number, y: number, z: number];

function add3Dcoordinate(
  c1: ThreeDcoordinate,
  c2: ThreeDcoordinate
): ThreeDcoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3Dcoordinate([1, 1, 1], [2, 2, 2]));

// useState returns a state and stateSetter

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [str1, setStr] = simpleStringState("hey");
const [str2, setStr2] = simpleStringState("nima");
console.log(str2());
console.log(str1());
