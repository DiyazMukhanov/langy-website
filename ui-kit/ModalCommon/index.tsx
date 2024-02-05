import classNames from "classnames"
import { createPortal } from "react-dom"
import styles from './ModalCommon.module.scss'

type Props = {
    children: React.ReactNode;
    className: string;
    isOpened: boolean;
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({
    children,
    className,
    isOpened,
    onClose,
}) => {
    if (isOpened) {
        return (
            <>
                {createPortal(
                    <>
                        <div className={styles.backDrop} onClick={onClose} />
                        <div className={classNames(styles.modal, className)}>{children}</div>
                    </>,
                    document.body
                )}
            </>
        );
    }
};