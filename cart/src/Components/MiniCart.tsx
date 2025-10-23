import { useEffect, useState } from "react";
import { cart } from "../hooks/cart";

export default function MiniCart() {
  const [items, setItems] = useState(null);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value);
    const subscription = cart.subscribe((c) => {
      setItems(c);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (!items) {
    return null;
  }
  return <div>Mini Cart</div>;
}
