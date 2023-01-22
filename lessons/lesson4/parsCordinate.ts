interface Cordinate {
  x: number;
  y: number;
}

function parsCordinateFromObject(obj: Cordinate): Cordinate {
  return {
    ...obj,
  };
}

function parsCordinateFromNumbers(x: number, y: number): Cordinate {
  return {
    x,
    y,
  };
}

// in Java Script we handle it with one Function, in TS we can handle it with overloading features

function parsCordinate(obj: Cordinate): Cordinate;
function parsCordinate(str: string): Cordinate;

function parsCordinate(x: number, y: number): Cordinate;

// unknown is basically any but where you have to cast it before use it
function parsCordinate(arg1: unknown, arg2?: unknown): Cordinate {
  let coord: Cordinate = {
    x: 0,
    y: 0,
  };

  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Cordinate),
    };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, val] = str.split(":");
      coord[key as "x" | "y"] = parseInt(val, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}
console.log(parsCordinate({ x: 5, y: 10 }));
console.log(parsCordinate(500, 1000));
