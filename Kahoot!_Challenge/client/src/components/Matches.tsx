export default function Matches({ words }: { words: string[] }) {
  return (
    <ul>
      {words.map((match) => {
        return <li key={`${match}`}>{match}</li>;
      })}
    </ul>
  );
}
