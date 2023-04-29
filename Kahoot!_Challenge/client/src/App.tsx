import axios from "axios";
import { useState, useEffect } from "react";
import Autocompletion from "./components/autocomplete";
import "./css/main.css";

export default function App() {
  const [newWord, setNewWord] = useState("");
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

  function handleAutocomplete(e: React.ChangeEvent<HTMLInputElement>) {
    const prefix = e.target.value;
    setNewWord(prefix);
    if (prefix !== "") {
      console.log(trie.autocomplete(prefix));
    }
  }

  function addWord() {
    trie.insert(newWord);
  }

  return (
    <div className="container">
      <h1>Autocomplete</h1>
      <div>
        <span>word:</span>
        <input onChange={(e) => handleAutocomplete(e)} value={newWord} />
      </div>
      <button type="button" onClick={addWord}>
        Add
      </button>
    </div>
  );
}
