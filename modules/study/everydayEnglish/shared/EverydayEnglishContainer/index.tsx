import styles from './EverydayEnglishContainer.module.scss';
import classNames from 'classnames';

export default function EverydayEnglishContainer({ children, className }) {
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    )
}