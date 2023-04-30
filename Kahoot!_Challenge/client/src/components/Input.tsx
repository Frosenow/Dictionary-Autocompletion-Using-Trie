type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
};

export default function Input({ onChange, value, name }: Props) {
  return (
    <div>
      <span>{name}</span>
      <input onChange={onChange} value={value} />
    </div>
  );
}
