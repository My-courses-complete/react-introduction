import React from "react";

export default function useLocalStorage(itenName: string) {
  const [item, setItem] = React.useState<Array<Todo>>([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itenName);
        let parsedItem: Array<Todo>;
        if (!localStorageItem) {
          localStorage.setItem(itenName, JSON.stringify([]));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1000);
  }, [itenName]);

  const saveItem = (newItem: Array<Todo>) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itenName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    error,
    loading,
  };
}
