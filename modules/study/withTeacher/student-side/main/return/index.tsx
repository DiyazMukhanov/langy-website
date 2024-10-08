import { Modal } from "@/ui-kit/ModalCommon";
import styles from "./Return.module.scss";
import { Button } from "@/ui-kit/Button";

export const Return = ({ isReturnShowing, setIsReturnShowing, text }) => {
  return (
    <Modal
      isOpened={isReturnShowing}
      onClose={() => setIsReturnShowing(false)}
      className={styles.container}
    >
      <div className={styles.text}>{text}</div>
      <div className={styles.bottom}>
        <Button
          variant="standardMiddleOutlined"
          onClick={() => setIsReturnShowing(false)}
        >
          Закрыть
        </Button>
      </div>
    </Modal>
  );
};
