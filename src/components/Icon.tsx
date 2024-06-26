import { MouseEventHandler } from "react";

interface Props {
  icon: string[];
  color?: string;
  size?: string;
  className?: string;
  onClick?: MouseEventHandler<SVGElement>;
}

const Icon = ({
  icon,
  color = "#fff",
  size = "w-5 h-5",
  className = "",
  onClick,
}: Props): JSX.Element => {
  const paths = icon.map((d) => <path key={d} d={d} />);

  const classes: { clickable: string } = {
    clickable: "cursor-pointer",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      className={[size, onClick && classes.clickable, className].join(" ")}
      onClick={onClick ? onClick : undefined}
    >
      {paths}
    </svg>
  );
};

export default Icon;
