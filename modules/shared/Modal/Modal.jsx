import styles from './Modal.module.scss';

export default function Modal({ isOpen, onClose, children }) {

  return isOpen ? (
    <div
      className={styles.overlay}
      onClick={() => {
        onClose();
      }}
    >
      <div
        className={styles.modal}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}
