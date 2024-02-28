import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorage<T>(key = '', initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}