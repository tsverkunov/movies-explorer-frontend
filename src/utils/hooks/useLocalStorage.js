import { useState, useEffect } from 'react';

function useLocalStorage(key, value) {
  const [savedValue, setSavedValue] = useState(getValue);

  function getValue() {
    const historyValue = localStorage.getItem(key);
    if (historyValue) {
      return JSON.parse(historyValue);
    }
    return value;
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(savedValue));
  }, [savedValue, key]);

  return [savedValue, setSavedValue];
}

export default useLocalStorage;