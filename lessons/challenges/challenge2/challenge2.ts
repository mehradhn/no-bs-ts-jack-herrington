// function myForEach<T>(items: T[], forEachfunc: (v: T) => void): void {
//   items.reduce((a, v) => {
//     forEachfunc(v);
//     return undefined;
//   }, undefined);
// }

// myForEach(["a", "b", "c"], (v) => console.log(v));

function myFilter<T>(items: T[], filterfunc: (v: T) => boolean): T[] {
  return items.reduce((a, v) => (filterfunc(v) ? [...a, v] : a), []);
}
