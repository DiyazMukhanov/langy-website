import styles from './Modal.module.scss';
import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.classList.contains(styles.overlay)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  );
}
