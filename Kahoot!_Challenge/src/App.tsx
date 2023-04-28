import Dictionary from "./components/autocomplete";
import dictionaryDB from "./services/dictionary";
import { useState, useEffect } from "react";

type DictionaryObject = {
  word: string;
  id: number;
};

export default function App() {
  const [newWord, setNewWord] = useState("");
  useEffect(() => {
    const dictionary = new Dictionary();
    dictionaryDB.getAll().then((response) => console.log(response));
  }, []);

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // dictionary.insert(newWord);
    console.log(`${newWord} added to Trie`);
  }

  function handleWordCheck() {
    // console.log(dictionary.autocomplete(newWord));
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
