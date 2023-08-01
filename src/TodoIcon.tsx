import { ReactComponent as DeleteSVG } from "./delete.svg";
import { ReactComponent as CheckSVG } from "./check.svg";

type TodoIconProps = {
  type: string;
  //   color: string;
};

type IconTypes = {
  [index: string]: JSX.Element;
};

const icons: IconTypes = {
  delete: <DeleteSVG />,
  check: <CheckSVG />,
};

export default function TodoIcon({ type }: TodoIconProps) {
  return (
    <span className={`Icon Icon-svg Icon-${type}`}>
		{icons[type]}
	</span>
  );
}
