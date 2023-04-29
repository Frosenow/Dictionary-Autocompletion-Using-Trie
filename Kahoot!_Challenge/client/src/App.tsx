import axios from "axios";
import { useState } from "react";

export default function App() {
  const [newWord, setNewWord] = useState("");

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios.get("dictionary").then((response) => console.log(response.data));
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
