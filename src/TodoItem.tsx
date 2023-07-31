import React from "react";

type TodoItemProps = {
  text: string;
  completed: boolean;
};

export default function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <li>
      <span>{text}</span>
      <button>X</button>
    </li>
  );
}
