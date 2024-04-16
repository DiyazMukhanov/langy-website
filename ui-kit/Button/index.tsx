import classNames from "classnames";
import styles from "./button.module.scss";

type Props = {
  children: string;
  variant: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export const Button = ({
  children,
  variant = "contained",
  onClick,
  disabled,
  className,
  type,
}: Props) => {
  const classes = classNames(styles.button, styles[variant], className);

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
