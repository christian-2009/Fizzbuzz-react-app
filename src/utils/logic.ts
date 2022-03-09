function isFizz(num: number): boolean | undefined {
  if (num % 3 === 0) {
    return true;
  }
}

function isBuzz(num: number): boolean | undefined {
  if (num % 5 === 0) {
    return true;
  }
}

export { isFizz };
export { isBuzz };
