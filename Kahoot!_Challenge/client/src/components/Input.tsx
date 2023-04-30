type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

export default function Input({ onChange, value, placeholder }: Props) {
  return (
    <div>
      <input onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
}
