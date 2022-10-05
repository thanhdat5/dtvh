import classnames from "classnames";
import "./button.scss";

interface TNGButtonProps {
  text: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}
const TNGButton = ({
  disabled,
  text,
  type = "button",
  className,
  onClick,
}: TNGButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={classnames("tng-btn", className)}
      onClick={() => (onClick ? onClick() : null)}
    >
      {text}
    </button>
  );
};
export default TNGButton;
