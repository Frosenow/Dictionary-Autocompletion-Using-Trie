import axios from "axios";
import { useState, useEffect } from "react";
import Autocompletion from "./components/autocomplete";
import Input from "./components/Input";
import Button from "./components/Button";
import Title from "./components/Title";
import Matches from "./components/Matches";
import Alert from "./components/Alert";
import { validateWord } from "./services/validaiton";
import "./css/main.css";

export default function App() {
  const [newWord, setNewWord] = useState("");
  const [matches, setMatches] = useState<string[]>([]);
  const [trie, setTrie] = useState(new Autocompletion());
  const [isVisible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

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
    let message = "Incorrect word";
    if (validateWord(newWord)) {
      if (newWord == trie.autocomplete(newWord)[0]) {
        message = `${newWord} is already in dictionary`;
      } else {
        trie.insert(newWord.trim());
        message = `${newWord} added to dictionary`;
      }
    }
    setMessage(message);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1600);
    setNewWord("");
  }

  return (
    <div className="container">
      <Title title="autocompleter" />
      <div className="input-container">
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleAutocomplete(e)}
          value={newWord}
          placeholder="Type something..."
        />
        <Button type="button" onClick={addWord} name="Add Word" />
      </div>
      {isVisible && <Alert message={message} />}
      <Matches words={matches} />
    </div>
  );
}
