let userName = "mehrad Hajinoroozi";
let number: number = 5;
let string: RegExp = /foo/;

let names: string[] = userName.split("");
const valArrays: Array<number> = [1, 2, 3, 4, 5];

interface person {
  name: string;
  lastName: string;
}
const myInfo: person = {
  name: "Mehrad",
  lastName: "Hn",
};

// if you want to use DRY for object use interface

// in js you can map object and if you want to add new property do like this ob[newItem]= newVal

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";
