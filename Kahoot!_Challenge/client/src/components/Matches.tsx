import { FixedSizeList as List } from "react-window";

export default function Matches({ words }: { words: string[] }) {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <li key={`${words[index]}`} style={style}>
      {words[index]}
    </li>
  );

  return (
    <List
      height={400}
      itemCount={words.length}
      itemSize={40}
      width={"80%"}
      className={
        words.length > 0 ? "list-container has-content" : "list-container"
      }
    >
      {Row}
    </List>
  );
}
