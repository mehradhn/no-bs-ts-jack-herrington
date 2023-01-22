function printIngredient(
  quantity: string,
  ingredient: string,
  extera?: string
) {
  console.log(`${quantity} ${ingredient} ${extera ? extera : ""}`);
}

printIngredient("1c", "Flour");
printIngredient("1c", "Flour", "sugar");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

// hacky solution

function getEmail(user: User): string {
  if (user.info) return user.info.email!;
  return "";
}

// good way

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback: () => void) {
  console.log(x, y);
  callback?.();
}
