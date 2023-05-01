function validateWord(word: string): boolean {
  if (!word) return false;

  const pattern = /^[a-zA-Z]+$/;
  return pattern.test(word);
}

function checkForArray(word: string): string[] | boolean {
  if (word.includes(",")) {
    return word.split(",");
  } else {
    return false;
  }
}
export { validateWord };
