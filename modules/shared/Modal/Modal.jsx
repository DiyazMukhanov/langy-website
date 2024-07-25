import styles from "./Modal.module.scss";

export default function Modal({
  isOpen,
  onClose,
  children,
  isCentral,
  modalClassname,
}) {
  return isOpen ? (
    <div
      className={styles.overlay}
      onClick={() => {
        onClose();
      }}
    >
      <div
        className={isCentral ? modalClassname : styles.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}
