// Function that validates if a given word contains only letters (no numbers, symbols or spaces)
function validateWord(word: string): boolean {
  if (!word) return false;

  const pattern = /^[a-zA-Z]+$/;
  return pattern.test(word);
}

export { validateWord };
