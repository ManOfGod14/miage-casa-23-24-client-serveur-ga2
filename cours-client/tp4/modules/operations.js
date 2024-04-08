// addition
export function addition(a, b) {
  return `${a} + ${b} = ${a + b}`;
}

// soustraction
export function soustraction(a, b) {
  return `${a} - ${b} = ${a - b}`;
}

// multiplication
export function multiplication(a, b) {
  return `${a} * ${b} = ${a * b}`;
}

// division
export function division(a, b) {
  if (b == 0) {
    return "Division par zéro impossible !";
  } else {
    return `${a} / ${b} = ${a / b}`;
  }
}
