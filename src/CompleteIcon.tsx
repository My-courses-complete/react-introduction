import TodoIcon from "./TodoIcon";

type CompleteIconProps = {
  completed: boolean;
  onComplete: () => void;
};

export default function CompleteIcon({ completed, onComplete }: CompleteIconProps) {
  return <TodoIcon type="check" color={completed ? "green" : "gray"} onClick={onComplete}/>;
}
