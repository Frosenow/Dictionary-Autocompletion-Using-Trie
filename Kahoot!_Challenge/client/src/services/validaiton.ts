function validateWord(word: string): boolean {
  const pattern = /^[a-zA-Z]+$/;
  return pattern.test(word);
}

export { validateWord };
