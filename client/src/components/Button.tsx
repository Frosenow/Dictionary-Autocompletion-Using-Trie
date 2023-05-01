type Props = {
  type: "submit" | "reset" | "button" | undefined;
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ type, onClick, name }: Props) {
  return (
    <>
      <button type={type} onClick={onClick}>
        {name}
      </button>
    </>
  );
}
