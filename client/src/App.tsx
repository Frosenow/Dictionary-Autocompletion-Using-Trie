import axios from "axios";
import { useState, useEffect } from "react";
import Autocompletion from "./services/autocomplete";
import Input from "./components/Input";
import Button from "./components/Button";
import Title from "./components/Title";
import Matches from "./components/Matches";
import Alert from "./components/Alert";
import { validateWord } from "./services/validaiton";
import "./css/main.css";

export default function App() {
  // State management
  const [newWord, setNewWord] = useState("");
  const [matches, setMatches] = useState<string[]>([]);
  const [trie, setTrie] = useState(new Autocompletion());
  const [isVisible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  // Fetching data from local dictionary using axios
  useEffect(() => {
    axios.get("dictionary").then((response) => {
      const data = response.data;

      // Loading data into trie data structure
      const t = new Autocompletion();
      data.forEach((word: string) => {
        t.insert(word);
      });
      // Loading fetched data into trie state
      setTrie(t);
    });
  }, []);

  // Handling autocomplete functionality using trie data structure
  function handleAutocomplete(e: React.ChangeEvent<HTMLInputElement>) {
    const prefix = e.target.value;
    setNewWord(prefix);
    if (prefix !== "") {
      const match: string[] = trie.autocomplete(prefix);
      // Setting the result of autocomplete
      setMatches(match);
    } else {
      // Clearing the result element
      setMatches([]);
    }
  }

  // Adding new word to the dictionary
  function addWord() {
    let message = "Incorrect word";
    // Validating if the word is correct
    if (validateWord(newWord)) {
      if (newWord == trie.autocomplete(newWord)[0]) {
        message = `${newWord} is already in dictionary`;
      } else {
        // Adding new word into trie data structure
        trie.insert(newWord.trim());
        message = `${newWord} added to dictionary`;
      }
    }
    // Displaying alert
    setMessage(message);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1600);

    // Clearing the input and result list
    setNewWord("");
    setMatches([]);
  }

  // Rendering the UI
  return (
    <>
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
    </>
  );
}
