import { FC } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  //   style?: React.CSSProperties;
  onClick?: () => void;
  text: string;
}

export const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
