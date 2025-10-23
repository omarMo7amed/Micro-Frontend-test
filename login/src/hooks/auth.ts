import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const API_SERVER = "http://localhost:8000";

export const jwt = new BehaviorSubject<string | null>(null);

export const login = async (username: string, password: string) => {
  const response = await fetch(`${API_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  const data = await response.json();
  jwt.next(data.access_token);

  return data.access_token;
};

const logout = () => jwt.next(null);

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState<boolean>(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    const subscription = jwt.subscribe((t) => {
      setLoggedIn(!!t);
    });

    return () => subscription.unsubscribe();
  }, []);

  return loggedIn;
}
