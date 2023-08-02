import CompleteIcon from '../TodoIcon/CompleteIcon';
import DeleteIcon from '../TodoIcon/DeleteIcon';
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
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}
