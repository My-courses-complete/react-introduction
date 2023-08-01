import { ReactComponent as DeleteSVG } from "./delete.svg";
import { ReactComponent as CheckSVG } from "./check.svg";

type TodoIconProps = {
  type: string;
  color: string;
  onClick: () => void;
};

type IconTypes = {
  [index: string]: (color: string) => JSX.Element;
};

const icons: IconTypes = {
  delete: (color: string) => <DeleteSVG className="Icon-svg" fill={color} />,
  check: (color: string) => <CheckSVG className="Icon-svg" fill={color} />,
};

export default function TodoIcon({ type, color, onClick }: TodoIconProps) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {icons[type](color)}
    </span>
  );
}
