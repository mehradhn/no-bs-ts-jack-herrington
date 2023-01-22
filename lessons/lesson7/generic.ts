// lets review a function

function setStateWithoutGeneric(
  initialValue: string
): [() => string, (s: string) => void] {
  let str = initialValue;
  return [() => str, (newStr: string) => (str = newStr)];
}

const [state, setState] = setStateWithoutGeneric("Mehrad");

console.log(state());
console.log(setState("Nima"));
console.log(state());

// now imagine we want to use any type that specific we can like that

function setStateGenerics<T>(initialValue: T): [() => T, (s: T) => void] {
  let str = initialValue;
  return [() => str, (newStr: T) => (str = newStr)];
}

const [genericState, setGenericState] = setStateGenerics(1);

console.log(genericState());
setGenericState(6);
console.log(genericState());

console.log("----------------------------------------");

// if you set null, then you override T like this
const [generic2State, setGenericState2] = setStateGenerics<number | null>(null);
console.log(generic2State());
setGenericState2(6);
console.log(generic2State());
// --------------------------
// e.g2

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Dudes {
  name: string;
  score: number;
}

const dudes: Dudes[] = [
  { name: "Mehrad", score: 20 },
  { name: "Sia", score: 15 },
  { name: "Hamed", score: 16 },
  { name: "Sianor", score: 14 },
];

console.log(ranker(dudes, ({ score }) => score));
