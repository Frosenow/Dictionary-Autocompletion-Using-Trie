export default function Alert({ message }: { message: string }) {
  return (
    <div className="alert">
      <span className="alert-msg">{message}</span>
    </div>
  );
}
