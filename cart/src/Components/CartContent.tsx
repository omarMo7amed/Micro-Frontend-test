import { useEffect, useState } from "react";
import { jwt } from "../hooks/auth";

export default function CartContent() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const subscription = jwt.subscribe((t) => {
      setToken(t ?? "");
    });

    return () => subscription.unsubscribe();
  }, []);

  return <div>Cart Content</div>;
}
