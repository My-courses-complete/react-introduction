import React from "react";
import "./TodoList.css";

export default function TodoList(props: { children: React.ReactNode }) {
  return <ul className="TodoList">{props.children}</ul>;
}
