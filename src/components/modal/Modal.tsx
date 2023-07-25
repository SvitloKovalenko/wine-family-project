import { FC } from "react";
import styles from "./Modal.module.scss";
import Form from "./Form/Form";

interface ModalProps {
  style?: React.CSSProperties;
  closeBtn: boolean;
  onModalClose: () => void;
  header: string;
}

export const Modal: FC<ModalProps> = (props) => {
  return (
    <div
      className={`${styles.modal_wrapper} ${
        props.closeBtn ? styles.open : styles.close
      }`}
      style={{ ...props.style }}
      onClick={(e) => e.currentTarget === e.target && props.onModalClose()}>
      <div className={styles.modal_body}>
        <div className={styles.modal_header}>
          <h2 className={styles.modal_title}>{props.header}</h2>
          <button className={styles.modal_close} onClick={props.onModalClose}>
            X
          </button>
        </div>
        <Form />
      </div>
    </div>
  );
};
