import CompleteIcon from './CompleteIcon';
import DeleteIcon from './DeleteIcon';
import './TodoItem.css'

type TodoItemProps = {
  text: string;
  completed: boolean;
  onComplete: () => void;
  onDelete: () => void;
};

export default function TodoItem({ text, completed, onComplete, onDelete }: TodoItemProps) {
  return (
	<li className="TodoItem">
      {/* <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={onComplete}>
        V
      </span> */}
      <CompleteIcon />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon />
      {/* <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span> */}
    </li>
  );
}
