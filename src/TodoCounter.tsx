import "./TodoCounter.css";

type TodoCounterProps = {
  total: number;
  completed: number;
};

export default function TodoCounter({ total, completed }: TodoCounterProps) {
  return (
	<h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}
