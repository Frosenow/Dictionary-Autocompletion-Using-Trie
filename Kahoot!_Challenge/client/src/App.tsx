import axios from "axios";
import { useState, useEffect } from "react";
import Autocompletion from "./components/autocomplete";
import PrefixHashTree from "./components/autocomplete";

export default function App() {
  const [newWord, setNewWord] = useState(" ");
  const [trie, setTrie] = useState(new Autocompletion());

  useEffect(() => {
    axios.get("dictionary").then((response) => {
      const data = response.data;
      const t = new Autocompletion();
      data.forEach((word: string) => {
        t.insert(word);
      });
      setTrie(t);
    });
  }, []);

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(trie.autocomplete(newWord));
  }

  function handleWordCheck() {}

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
