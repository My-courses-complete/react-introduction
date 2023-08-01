import './TodoItem.css'

type TodoItemProps = {
  text: string;
  completed: boolean;
};

export default function TodoItem({ text, completed }: TodoItemProps) {
  return (
	<li className="TodoItem">
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}
