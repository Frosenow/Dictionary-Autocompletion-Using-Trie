import Dictionary from "./components/autocomplete";
import { useState } from "react";

export default function App() {
  const [newWord, setNewWord] = useState("");

  const dictionary = new Dictionary();
  dictionary.insert("internet");
  dictionary.insert("car");
  dictionary.insert("carpet");
  dictionary.insert("java");
  dictionary.insert("javascript");

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dictionary.insert(newWord);
    console.log(`${newWord} added to Trie`);
  }

  function handleWordCheck() {
    console.log(dictionary.autocomplete(newWord));
  }

  return (
    <>
      <h1>Autocomplete</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <div>
          word:
          <input onChange={(e) => setNewWord(e.target.value)} value={newWord} />
        </div>
        <button type="button" onClick={handleWordCheck}>
          Check
        </button>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
