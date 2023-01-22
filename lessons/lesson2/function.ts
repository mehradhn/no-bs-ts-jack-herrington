function addNumbers(a: number, b: number): number {
  return a + b;
}
export default addNumbers;

// if you don't want to pass parameter
export const addString = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

// union types
// A union type describes a value that can be one of several types. We use the vertical bar ( | )

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// void is used where there is no data. For example, if a function does not return any value
export const PrintFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

// Promise
export const fetchData = (urls: string): Promise<string> =>
  Promise.resolve("fetch Data...");

function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(" ")}`;
}

// notice typescript only enforce types at compile time
