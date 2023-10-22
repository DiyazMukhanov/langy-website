import styles from './Modal.module.scss';
import { useEffect, useState } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.classList.contains(styles.overlay)) {
        onClose();
      }
    }

    if (isOpen) {
      setModalVisible(true);
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!modalVisible) return null;

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
      onClick={onClose}
    >
      <div className={`${styles.modal} ${isOpen ? styles.visible : ''}`}>
        {children}
      </div>
    </div>
  );
}
