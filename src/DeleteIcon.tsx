import TodoIcon from "./TodoIcon";

type DeleteIconProps = {
	onDelete: () => void;
};

export default function DeleteIcon({ onDelete }: DeleteIconProps) {
  return <TodoIcon type="delete" color="gray" onClick={onDelete}/>;
}
