import axios from "axios";
import { useState, useEffect } from "react";
import Autocompletion from "./components/autocomplete";
import Input from "./components/Input";
import Button from "./components/Button";
import Title from "./components/Title";
import Matches from "./components/Matches";
import Alert from "./components/Alert";
import "./css/main.css";

export default function App() {
  const [newWord, setNewWord] = useState("");
  const [matches, setMatches] = useState<string[]>([]);
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
      const match: string[] = trie.autocomplete(prefix);
      console.log(match);
      setMatches(match);
    } else {
      setMatches([]);
    }
  }

  function addWord() {
    trie.insert(newWord);
    console.log(`${newWord} added to dictionary`);
  }

  return (
    <div className="container">
      <Title title="Autocomplete" />
      <div className="input-container">
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleAutocomplete(e)
          }
          value={newWord}
          placeholder="Type something..."
        />
        <Button type="button" onClick={addWord} name="Add Word" />
      </div>
      <Matches words={matches} />
    </div>
  );
}
