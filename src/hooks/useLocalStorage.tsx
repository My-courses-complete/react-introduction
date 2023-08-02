import React from "react";

export default function useLocalStorage(itenName: string) {
  const [item, setItem] = React.useState((): Array<Todo> => {
    const savedItem = localStorage.getItem(itenName);
    return savedItem ? JSON.parse(savedItem) : [];
  });

  const saveItem = (newItem: Array<Todo>) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itenName, stringifiedItem);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
  };
}
