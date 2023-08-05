import "./CreateTodoButton.css";

export default function CreateTodoButton({ openModal }: CreateTodoButtonProps) {
  return <button className="CreateTodoButton" onClick={() => openModal()}>+</button>;
}
