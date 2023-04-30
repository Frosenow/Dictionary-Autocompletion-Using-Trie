import { useState, useEffect } from "react";

export default function Alert({ message }: { message: string }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{show && <div className="alert">{message}</div>}</>;
}
